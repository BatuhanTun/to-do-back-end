const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    const data = await docClient.delete(event).promise()
   return { body: 'Successfully deleted item!' }
  } catch (err) {
    return { error: err };
  }
}
