const jwt = require('jsonwebtoken');
require('dotenv').config();

const key = process.env.JWT_SECRET || 'senhasupersecreta';

const tokenIsValid = (token) => {
  try {
    const result = jwt.verify(token, key);
    return result;
  } catch (error) {
    return false;
  }
};

module.exports = { tokenIsValid };
