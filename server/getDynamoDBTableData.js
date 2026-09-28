const AWS = require('aws-sdk');
const fs = require('fs');

// Set the region
AWS.config.update({ region: 'us-east-2' });

// Create DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Table name
const tableName = 'WeddingParty';

// Function to get data from DynamoDB table
function getDataFromDynamoDB() {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableName
    };

    dynamoDB.scan(params, (err, data) => {
      if (err) {
        console.error('Error scanning table:', err);
        reject(err);
      } else {
        const items = data.Items;
        resolve(items);
      }
    });
  });
}

// Get data from DynamoDB table
getDataFromDynamoDB()
  .then(items => {
    const jsonData = JSON.stringify(items, null, 2); // Convert items array to JSON with indentation
    fs.writeFileSync('wallofshame.json', jsonData);
    console.log('Data from DynamoDB table WeddingParty has been written to wallofshame.json');
  })
  .catch(error => {
    console.error('Error:', error);
  });
