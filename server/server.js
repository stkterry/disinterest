const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const cors = require("cors");

const models = require("./models/index");
const schema = require("./schema/schema");
const db = require("../config/keys").MONGO_URI;
const app = express();

const uploadFile = require("./upload_file");
// console.log(uploadFile);

if (!db) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(cors());
  
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.post(
  "/upload",
  uploadFile.array("image", 1),
  (req, res) => {
    res.send("image properly uploaded");
  }
);

app.use(bodyParser.json());

module.exports = app;