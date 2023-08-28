const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    await docClient.put(event).promise();
    
    return { body: JSON.stringify(event) }
  } catch (err) {
    
    return { error: err }
  }
};