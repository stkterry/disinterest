// File imported into server.js
var AWS = require('aws-sdk');
var uuid = require('uuid');
var multer = require('multer');
var multerS3 = require('multer-s3');

var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });

AWS.config.credentials = credentials;

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


