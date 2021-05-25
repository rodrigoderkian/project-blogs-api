const { User } = require('../models');
const { validationHelpers } = require('../helpers');
const { generateToken } = require('../auth');

const addUser = async (displayName, email, password, image) => {
  const verifyEmail = await User.findOne({ where: { email } });
  validationHelpers.checkIfDisplayNameHave8Chars(displayName);
  validationHelpers.checkIfEmailExist(email);
  validationHelpers.checkIfEmailIsValid(email);
  validationHelpers.checkIfPasswordExist(password);
  validationHelpers.checkIfPasswordHave6Chars(password);
  validationHelpers.checkIfEmailAlreadyExist(verifyEmail);
  const token = generateToken.create(displayName, email);
  await User.create({ displayName, email, password, image });
  return token;
};

module.exports = {
  addUser,
};
