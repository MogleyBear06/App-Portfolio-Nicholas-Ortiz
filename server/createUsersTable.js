const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-2',
});

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
  TableName: 'WeddingParty',

  KeySchema: [
    { AttributeName: 'userId', KeyType: 'HASH' },
  ],

  AttributeDefinitions: [
    { AttributeName: 'userId', AttributeType: 'S' },
    { AttributeName: 'login', AttributeType: 'S' },
    { AttributeName: 'resetToken', AttributeType: 'S' },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },

  GlobalSecondaryIndexes: [
    {
      IndexName: 'login-index',
      KeySchema: [
        { AttributeName: 'login', KeyType: 'HASH' },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    },
    {
      IndexName: 'resetToken-index',
      KeySchema: [
        { AttributeName: 'resetToken', KeyType: 'HASH' },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    },
  ],
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error(
      'Unable to create table. Error JSON:',
      JSON.stringify(err, null, 2),
    );
  } else {
    console.log(
      'Created table. Table description JSON:',
      JSON.stringify(data, null, 2),
    );
  }
});