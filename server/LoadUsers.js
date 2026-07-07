require('dotenv').config();
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs'); // 👈 important
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

AWS.config.update({
  region: 'us-east-2',
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const USERS = JSON.parse(fs.readFileSync('./guestListAdditional.json', 'utf8'));

async function seedUsers() {
  for (const user of USERS) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const params = {
        TableName: 'Users',
        Item: {
          userId: uuidv4(),
          login: user.login,
          username: user.username,
          usernameattending: user.usernameattending || null,
          usernameattendingrehearsal: user.usernameattendingrehearsal || null,
          position: user.position || null,
          usernameguest: user.usernameguest || null,
          usernameguestattending: user.usernameguestattending || null,
          usernameguestattendingrehearsal: user.usernameguestattendingrehearsal || null,
          email: user.email || null,
          dietary: user.dietary || null,
          password: hashedPassword,
          createdAt: new Date().toISOString(),
        },
      };

      await dynamodb.put(params).promise();
      console.log(`✅ Inserted: ${user.username}`);
    } catch (err) {
      console.error(`❌ Error inserting ${user.username}`, err);
    }
  }
}

seedUsers();