const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    await docClient.delete(event).promise()
    return true;
  } catch (err) {
    return { error: err };
  }
}
