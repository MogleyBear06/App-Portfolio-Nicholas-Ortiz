const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');
const awsConfig = require('../../config/aws-config')
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const jwt = require('jsonwebtoken');
console.log('Connected to DynamoDB Users Table');
const table = 'Users';

const multer = require('multer');
const upload = multer();


const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};


router.get('/', (req, res) => {
  console.log('searching all Investors...');
    const params = {
      TableName: table,
    };
    
    dynamodb.scan(params, (err, data) => {
      if (err) {
        console.error("Scan error:", err);
        res.status(500).json(err); 
      } else {
        res.json(data.Items);
      }
    });
  });


router.get('/:userId', authenticateJWT, async (req, res) => {
  try {
    const userId = req.params.userId;        
    const currentUserId = req.user.userId;  

    if (userId !== currentUserId) {
      return res.status(403).json({ error: "Unauthorized access" });
    }

    console.log(`Querying for user: ${userId}`);

   const baseParams = {
  KeyConditionExpression: '#userId = :userId',
  ExpressionAttributeNames: {
    '#userId': 'userId',
    '#login': 'login',
    '#username': 'username',
    '#usernameattending': 'usernameattending',
    '#usernameattendingrehearsal': 'usernameattendingrehearsal',
    '#usernameguest': 'usernameguest',
    '#usernameguestattending': 'usernameguestattending',
    '#usernameguestattendingrehearsal': 'usernameguestattendingrehearsal',
    '#po': 'position',
    '#dietary': 'dietary',
    '#em': 'email',
    '#pw': 'password',
  },
  ExpressionAttributeValues: {
    ':userId': userId,
  },
  ProjectionExpression: '#userId, #login, #username, #usernameattending, #usernameattendingrehearsal, #usernameguest, #usernameguestattending, #usernameguestattendingrehearsal, #po, #dietary, #em, #pw',
};

    const [usersData, weddingPartyData] = await Promise.all([
      dynamodb.query({ ...baseParams, TableName: 'Users' }).promise(),
      dynamodb.query({ ...baseParams, TableName: 'WeddingParty' }).promise(),
    ]);

    const item = usersData.Items[0]
      ? { ...usersData.Items[0], source: 'Users' }
      : weddingPartyData.Items[0]
      ? { ...weddingPartyData.Items[0], source: 'WeddingParty' }
      : null;

    if (!item) {
      return res.status(404).json({ message: 'Crew member not found' });
    }

    res.json(item);
  } catch (err) {
    console.error('Error fetching investor:', err);
    res.status(500).json({ message: 'Internal server error', details: err.message });
  }
});

const { v4: uuidv4 } = require('uuid');

router.put('/:userId', upload.none(), async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

  console.log(`Updating profile for userId: ${userId}`, updatedData);
  console.log('Form data:', req.body);

  try {
    // Determine which table the user belongs to
    const [usersCheck, weddingPartyCheck] = await Promise.all([
      dynamodb.get({ TableName: 'Users', Key: { userId } }).promise(),
      dynamodb.get({ TableName: 'WeddingParty', Key: { userId } }).promise(),
    ]);

    const targetTable = usersCheck.Item ? 'Users' : weddingPartyCheck.Item ? 'WeddingParty' : null;

    if (!targetTable) {
      return res.status(404).json({ message: 'User not found in either table' });
    }

    let updateExpression = `SET 
    #usernameattending = :usernameattending,
    #usernameguestattending = :usernameguestattending,
    #dietary = :dietary,
    #em = :email`;

    let expressionAttributeValues = {
      ':usernameattending': updatedData.usernameattending || null,
      ':usernameguestattending': updatedData.usernameguestattending || null,
      ':dietary': updatedData.dietary || null,
      ':email': updatedData.email || null,
    };

    let expressionAttributeNames = {
      '#usernameattending': 'usernameattending',
      '#usernameguestattending': 'usernameguestattending',
      '#dietary': 'dietary',
      '#em': 'email',
    };

    // Only update rehearsal fields if this is a WeddingParty member
    if (targetTable === 'WeddingParty') {
      updateExpression += `,
      #usernameattendingrehearsal = :usernameattendingrehearsal,
      #usernameguestattendingrehearsal = :usernameguestattendingrehearsal`;

      expressionAttributeValues[':usernameattendingrehearsal'] = updatedData.usernameattendingrehearsal || null;
      expressionAttributeValues[':usernameguestattendingrehearsal'] = updatedData.usernameguestattendingrehearsal || null;

      expressionAttributeNames['#usernameattendingrehearsal'] = 'usernameattendingrehearsal';
      expressionAttributeNames['#usernameguestattendingrehearsal'] = 'usernameguestattendingrehearsal';
    }

    const params = {
      TableName: targetTable,
      Key: { userId },
      UpdateExpression: updateExpression,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    };

    const result = await dynamodb.update(params).promise();
    console.log('Update successful:', result);
    res.status(200).json({ message: 'Profile updated successfully', updatedProfile: result.Attributes });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile', details: error.message });
  }
});


router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  const usersParams = {
    TableName: 'Users',
    IndexName: 'login-index',
    KeyConditionExpression: '#login = :login',
    ExpressionAttributeNames: { '#login': 'login' },
    ExpressionAttributeValues: { ':login': login },
    Limit: 1,
  };

  const weddingPartyParams = {
    TableName: 'WeddingParty',
    IndexName: 'login-index',
    KeyConditionExpression: '#login = :login',
    ExpressionAttributeNames: { '#login': 'login' },
    ExpressionAttributeValues: { ':login': login },
    Limit: 1,
  };

  try {
    const [usersResponse, weddingPartyResponse] = await Promise.all([
      dynamodb.query(usersParams).promise(),
      dynamodb.query(weddingPartyParams).promise(),
    ]);

    const user = usersResponse.Items[0] || weddingPartyResponse.Items[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.userId, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});


module.exports = router;