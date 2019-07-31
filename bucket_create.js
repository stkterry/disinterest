// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
var multer = require('multer');
var multerS3 = require('multer-s3');

AWS.config.credentials = credentials;
// Create unique bucket name
var bucketName = 'node-sdk-sample-' + uuid.v4();
// var bucketName = 'disinterest-graphql-project-dev-' + uuid.v4();
// Create name for uploaded object key
var keyName = 'hello_world.txt';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});

