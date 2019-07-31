const mongoose = require("mongoose");

require("../models/index");
const db = require("../../config/keys").MONGO_URI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

Bin.collection.drop();
Pin.collection.drop();
Url.collection.drop();
User.collection.drop();

User.create([
  {
    first_name: "Cletus",
    last_name: "Deleteus",
    email: "a@b.com",
    password: "password"
  },
  {
    first_name: "Heckus",
    last_name: "Redeckus",
    email: "b@c.com",
    password: "password"
  },
  {
    first_name: "Luka",
    last_name: "Doncic",
    email: "Luka@gmail.com",
    password: "password"
  }
])
.then(user => console.log(`${user.length} users created`))
// .catch(err => console.log(err))
// .finally( _ => mongoose.connection.close())