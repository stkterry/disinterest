const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Chance = require("chance");
chance = new Chance();

const { randomPin, randFromInterval, randNIntsInMax, TAGS, TOPICS, FREETAGS } = require("./gen");

const { STATIC_USERS } = require("./static_seeds");
require("../models/index");
const db = require("../../config/keys").MONGO_URI;

const dropDB = async (db) => {
  await db.connection.dropDatabase();
  console.log("Dropping database")
}

const registerUser = async data => {
  try {
    const { first_name, last_name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hashedPassword
      },
      err => { if (err) throw err }
    );
    await user.save();
    return user;
  } catch (err) { throw err }
};

const seedUsers = async (amount) => {
  // Generate static users
  for (let user of STATIC_USERS) {
    await registerUser(user);
  }
  // Generate random users
  for (let i = 0; i < amount; i++) {
    await registerUser({
      first_name: chance.first(),
      last_name: chance.last(),
      email: chance.email(),
      password: "password"
    })
  }
  console.log(`Added ${STATIC_USERS.length} static and ${amount} random users`);
}

const seedPins = async (amount) => {
  const users = await User.find();
    for (let user of users) {
      for (let i = 0; i < amount; i++) {
        const pin = randomPin();
        const url = await Url.create({
          link: pin.url,
          snores: 1,
          created_by: user._id
        })
        .catch(err => console.log(`Url could not be saved because ${err}`));

        console.log(`Success ${url} was created`);

        const pinObj = await Pin.create(Object.assign(pin, { url: url._id }))
          .catch(err => console.log(`Pin could not be saved because ${err}`));

        await User.addPin(user._id, pinObj._id)
          .catch(err => console.log(`User could not be saved because ${err}`));
      }
    }
  console.log(`Added ${amount * users.length} pins to ${users.length} users (${amount} pins per user)`);
  
  return;
}

const crossSeedPins = async (min, max) => {
  
  let urls = await Url.find();
  let pins = await Pin.find();
  let users = await User.find();
  let urlObjs = {};
  for (let url of urls) urlObjs[url._id] = url;
  let pinObjs = [];
  for (let pin of pins) pinObjs.push(Object.assign(pin, { url: urlObjs[pin.url] }))

  for (let user of users) {
    const amount = randFromInterval(min, max);
    let selection = [];
    for (let idx of randNIntsInMax(amount, pins.length)) {
      if (pinObjs[idx].url.created_by !== user._id) selection.push(pinObjs[idx]);
    }
    for (pinObj of selection) {
      await Url.moreBoring(pinObj.url._id);
      const pin = await Pin.create({
        title: pinObj.title,
        description: pinObj.description,
        tags: pinObj.tags,
        url: pinObj.url._id
      })
      .catch(err => console.log(`Couldn't save pin because ${err}`));
      await User.addPin(user._id, pin._id)
        .catch(err => console.log(`Couldn't add pin to user because ${err}`))
    }
  }

}

const seedBins = async (binmin, binmax) => {
  const pins = await Pin.find();
  const users = await User.find();


  for (let user of users) {
    let userPins = pins.filter(pin => user.pins.includes(pin._id));
    let userTopics = {};
    for (let pin of userPins) {
      let tag = pin.tags.find(tag => TAGS.includes(tag));
      if (userTopics[tag]) {
        userTopics[tag][1].push(pin);
        userTopics[tag][2] += 1;
      }
      else userTopics[tag] = [tag, [pin], 1];
    }
    userTopics = Object.values(userTopics).sort(function(a, b) { return a[2] - b[2] });

    let nBins = randFromInterval(binmin, (binmax < userTopics.length) ? binmax : userTopics.length);
    for (let i = 0; i < nBins; i++) {
      let topic = userTopics.pop();
      const tbin = TOPICS[topic[0]];
      const bin = await Bin.create({
        title: randFromArray(tbin.titles),
        description: chance.paragraph(),
        tags: [topic[0], randFromArray(FREETAGS)],
        pins: topic[1].map(pin => pin._id)
      })
      .catch(err => `Could not create bin because ${err}`);
      await User.addBin(user._id, bin._id)
        .catch(err => `Couldn't add bin because ${err}`);
    }
  }
  console.log(`Added bins`);
}


mongoose
  .connect(db, { useNewUrlParser: true })
  .then( async db => {
    await dropDB(db)
      .catch (err => console.log("Database could not be dropped"));
    await seedUsers(10)
      .catch(err => console.log("Users could not be seeded"));
    await seedPins(5)
      .catch(err => console.log("Pins could not be seeded"));
    await crossSeedPins(2, 4)
      .catch(err => console.log("Couldn't cross-seed pins"));
    await seedBins(2, 4)
      .catch(err => console.log("Couldn't create user bins"));
    console.log("Done");
  })