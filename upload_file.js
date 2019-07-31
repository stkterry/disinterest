// Load the SDK and UUID
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



// // Create unique bucket name
// var bucketName = 'node-sdk-sample-' + uuid.v4();
// // var bucketName = 'disinterest-graphql-project-dev-' + uuid.v4();
// // Create name for uploaded object key
// var keyName = 'hello_world.txt';

// // Create a promise on S3 service object
// var bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' }).createBucket({ Bucket: bucketName }).promise();

// // Handle promise fulfilled/rejected states
// bucketPromise.then(
//   function (data) {
//     // Create params for putObject call
//     var objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello World!' };
//     // Create object upload promise
//     var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
//     uploadPromise.then(
//       function (data) {
//         console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//       });
//   }).catch(
//     function (err) {
//       console.error(err, err.stack);
//     });

