const express = require('express');
const AWS = require('aws-sdk');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const router = express.Router();
const docClient = new AWS.DynamoDB.DocumentClient();

const USERS_TABLE = 'Users';

// Configure your email transport (replace with your SMTP details or service)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// POST /forgot-password
router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    // 1. Query by email (using GSI)
    const params = {
      TableName: USERS_TABLE,
      IndexName: 'email-index',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email
      }
    };

    const data = await docClient.query(params).promise();

    if (data.Items.length === 0) {
      return res.status(400).json({ error: 'No user found with that email' });
    }

    const user = data.Items[0];

    // 2. Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const expirationTime = Date.now() + 3600000; // 1 hour from now

    // 3. Update the user with reset token and expiration
    const updateParams = {
      TableName: USERS_TABLE,
      Key: { userId: user.userId },
      UpdateExpression: 'set resetToken = :resetToken, resetTokenExpiration = :expiration',
      ExpressionAttributeValues: {
        ':resetToken': resetToken,
        ':expiration': expirationTime
      }
    };

    await docClient.update(updateParams).promise();

    // 4. Send email
    const resetUrl = `http://localhost:3000/ResetPassword/${resetToken}`; // Frontend page

    const mailOptions = {
      from: '"Scott Ortiz Wedding" <scottortizwedding@gmail.com>',
      to: email,
      subject: 'Password Reset',
      text: `Hello,

      You have requested to reset your password. Please follow the link below to do so:

      ${resetUrl}

      If you have not requested to reset your password, please disregard this message and contact Molly and Nick at scottortizwedding@gmail.com.

      Sincerely,  

      Nicholas Ortiz and Molly Scott`,

      html: `
      <p>Hello,</p>
      <p>You have requested to reset your password. Please follow the link below to do so:</p>
      <p><a href="${resetUrl}">Reset Link</a></p>
      <p>If you have not requested to reset your password, please disregard this message and contact 
      <a href="mailto:scottortizwedding@gmail.com">Scott Ortiz Wedding</a>.</p>
      <p>Sincerely,</p>
      <p>Scott Ortiz Wedding</p>
    `
      };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Password reset email sent' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// POST /reset-password
router.post('/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // 1. Query by reset token (using GSI)
    const params = {
      TableName: USERS_TABLE,
      IndexName: 'resetToken-index',
      KeyConditionExpression: 'resetToken = :token',
      ExpressionAttributeValues: {
        ':token': String(token)
      }
    };

    const data = await docClient.query(params).promise();

    if (data.Items.length === 0) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    const user = data.Items[0];

    if (Date.now() > user.resetTokenExpiration) {
      return res.status(400).json({ error: 'Token has expired' });
    }

    // 2. Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // 3. Update password and remove reset token
    const updateParams = {
        TableName: USERS_TABLE,
        Key: { userId: user.userId },
        UpdateExpression: 'REMOVE resetToken, resetTokenExpiration SET password = :newPassword',
        ExpressionAttributeValues: {
          ':newPassword': hashedPassword
        }
      };
      

    await docClient.update(updateParams).promise();

    res.json({ message: 'Password has been reset successfully' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
