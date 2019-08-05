// File imported into server.js
let AWS = require('aws-sdk');
let uuid = require('uuid');
let multer = require('multer');
let multerS3 = require('multer-s3');

const { aws_accessKeyId, aws_secretAccessKey, aws_region } = require("../config/keys")
// let aws_creds;
// if (process.env.NODE_ENV === 'production') {
//   aws_creds = require("../config/keys_prod");
// } else {
//   aws_creds = require("../config/aws_credentials.json");
// }
// console.log(process.env.NODE_ENV, aws_creds);
AWS.config.update({ 
  "accessKeyId": aws_accessKeyId, 
  "secretAccessKey": aws_secretAccessKey, 
  "region": aws_region 
});



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


