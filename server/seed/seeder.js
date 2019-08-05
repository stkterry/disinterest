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
  let tuser;
  // Generate static users
  for (let user of STATIC_USERS) {
    tuser = await registerUser(user)
      .catch(err => `Couldn't add user because ${err}`);
    console.log(`Successfully added user ${tuser._id}`)
  }
  // Generate random users
  for (let i = 0; i < amount; i++) {
    tuser = await registerUser({
      first_name: chance.first(),
      last_name: chance.last(),
      email: chance.email(),
      password: "password"
    })
    .catch(err => `Couldn't add user because ${err}`);
    console.log(`Added user ${tuser._id}`)
  }
  console.log(`Added ${STATIC_USERS.length} static and ${amount} random users`);
}

const seedPins = async (amount) => {
  const users = await User.find();
    for (let user of users) {
      for (let i = 0; i < amount; i++) {
        const pin = await randomPin();
        const url = await Url.create({
          link: pin.url,
          snores: 1,
          created_by: user._id
        })
        .catch(err => console.log(`Url could not be saved because ${err}`));

        const pinObj = await Pin.create(Object.assign(pin, { url: url._id, author: user._id }))
          .catch(err => console.log(`Pin could not be saved because ${err}`));

        await User.addPin(user._id, pinObj._id)
          .catch(err => console.log(`User could not be saved because ${err}`));
        
        console.log(`Added pin ${pinObj._id} and attached to user ${user._id}`)
      }
    }
  console.log(`Added ${amount * users.length} pins to ${users.length} users (${amount} pins per user)`);
}

const crossSeedPins = async (min, max) => {
  let totalCrossSeeds = 0;
  
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
        url: pinObj.url._id,
        image_url: pinObj.image_url,
        author: user._id
      })
      .catch(err => console.log(`Couldn't save pin because ${err}`));
      await User.addPin(user._id, pin._id)
        .catch(err => console.log(`Couldn't add pin to user because ${err}`))
      console.log(`Cross-seeded pin ${pinObj._id}`)
    }
    totalCrossSeeds += selection.length;
  }

  console.log(`Cross-seeded ${totalCrossSeeds} pins, avg ${totalCrossSeeds/users.length} per user`)
}

const seedBins = async (binmin, binmax) => {
  let totalBins = 0;
  const pins = await Pin.find();
  const users = await User.find();

  for (let user of users) {
    let userPins = pins.filter(pin => user.pins.includes(pin._id));
    let userTopics = {};
    for (let pin of userPins) {
      let tag = pin.tags.find(tag => TAGS.includes(tag));
      if (userTopics[tag]) {
        userTopics[tag].pins.push(pin);
        userTopics[tag].count += 1;
      }
      else userTopics[tag] = {tag: tag, pins: [pin], count: 1}
    }
    userTopics = Object.values(userTopics).sort(function(a, b) { return a.count - b.count });

    let nBins = randFromInterval(binmin, (binmax < userTopics.length) ? binmax : userTopics.length);
    for (let i = 0; i < nBins; i++) {
      totalBins += 1;
      let topic = userTopics.pop();
      const tbin = TOPICS[topic.tag];
      const bin = await Bin.create({
        title: randFromArray(tbin.titles),
        description: chance.paragraph(),
        tags: [topic.tag, randFromArray(FREETAGS)],
        pins: topic.pins.map(pin => pin._id)
      })
      .catch(err => `Could not create bin because ${err}`);
      await User.addBin(user._id, bin._id)
        .catch(err => `Couldn't add bin because ${err}`);
      
      console.log(`Created bin ${bin._id} for user ${user._id}`);
    }
  }
  console.log(`Added ${totalBins} bins`);
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then( async db => {
    await dropDB(db)
      .catch (err => console.log("Database could not be dropped"));
    await seedUsers(20)
      .catch(err => console.log("Users could not be seeded"));
    await seedPins(10)
      .catch(err => console.log("Pins could not be seeded", err));
    await crossSeedPins(2, 5)
      .catch(err => console.log("Couldn't cross-seed pins"));
    await seedBins(4, 7)
      .catch(err => console.log("Couldn't create user bins"));
    console.log("Done seeding, exiting");

    db.connection.close();
  })
  