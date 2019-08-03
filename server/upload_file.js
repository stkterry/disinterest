// File imported into server.js
let AWS = require('aws-sdk');
let uuid = require('uuid');
let multer = require('multer');
let multerS3 = require('multer-s3');

const aws_credentials = require("../config/aws_credentials.json");
AWS.config.update({ "accessKeyId": aws_credentials.accessKeyId, "secretAccessKey": aws_credentials.secretAccessKey, "region": aws_credentials.region});

// AWS.config.loadFromPath('/Users/michaelwarner/Desktop/GraphQL Docker Apollo Project Repo /disinterest/config/aws_credentials.json');


const s3 = new AWS.S3();


const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: 'node-sdk-sample-adda9c4c-7b1a-4f5f-af97-129044081c12',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'TESTING_META_DATA!' });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;


