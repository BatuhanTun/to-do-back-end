const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    const data = await docClient.scan(event).promise();

    // Tarihleri en yeni üstte sıralama
    const sortedData = data.Items.sort((a, b) => {
      const dateA = new Date(a.created_date.split('.').reverse().join(' '));
      const dateB = new Date(b.created_date.split('.').reverse().join(' '));
      return dateB - dateA;
    });

    const formattedData = {
      Items: sortedData,
      Count: data.Count,
      ScannedCount: data.ScannedCount
    };
    return { body: JSON.stringify(formattedData) };
  } catch (err) {
    return { error: err };
  }
};
