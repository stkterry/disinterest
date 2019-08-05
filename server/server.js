const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const cors = require("cors");

const models = require("./models/index");
const schema = require("./schema/schema");
const db = require("../config/keys").MONGO_URI;
const app = express();

const path = require("path");
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const uploadFile = require("./upload_file");
// console.log(uploadFile);
const singleUpload = uploadFile.single('image');

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

// app.post(
//   "/upload",
//   uploadFile.array("image", 1),
//   (req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // res.send("image properly uploaded");
//     return res.json({'imageUrl': req.file.location});
//   }
// );

app.post('/image-upload', function (req, res) {

  singleUpload(req, res, function (err) {

    if (err) {
      return res.status(422).send({ errors: [{ title: 'File Upload Error', detail: err.message }] });
    }

    return res.json({ 'imageUrl': req.file.location });
  });
});


app.use(bodyParser.json());

module.exports = app;