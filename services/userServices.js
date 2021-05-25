const { User } = require('../models');
const { validationHelpers } = require('../helpers');
const { generateToken } = require('../auth');

const addUser = async (displayName, email, password, image) => {
  validationHelpers.checkIfDisplayNameHave8Chars(displayName);
  validationHelpers.checkIfEmailAndPasswordExist(email, password);
  validationHelpers.checkIfPasswordHave6Chars(password);

  validationHelpers.checkIfEmailIsValid(email);
  const verifyEmail = await User.findOne({ where: { email } });
  validationHelpers.checkIfEmailAlreadyExist(verifyEmail);
  const token = generateToken.create(displayName, email);
  await User.create({ displayName, email, password, image });
  return { token };
};

module.exports = {
  addUser,
};