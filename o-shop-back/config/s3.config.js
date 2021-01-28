const aws = require('aws-sdk');
require('dotenv').config();
// const fs = require('fs');

aws.config.setPromisesDependency();
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});
const s3 = new aws.S3();
// var params = {
//     ACL: 'public-read',
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Body: fs.createReadStream(req.file.path),
//     Key: `uploads/${req.file.originalname}`
// };


// s3.params = params;


module.exports = s3;