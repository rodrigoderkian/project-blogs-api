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

const userLogin = async (email, password) => {
  validationHelpers.checkIfEmailAndPasswordExist(email, password);
  validationHelpers.checkIfEmailAndPasswordIsEmpty(email, password);
  const verifyUser = await User.findOne({
    where: { email, password },
  });
  validationHelpers.checkIfUserExist(verifyUser);
  const token = generateToken.create(verifyUser.displayName, email);
  return { token };
};

const getUsers = async () => {
  const result = await User.findAll();
  return result;
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id } });
  validationHelpers.checkIfUserIdExist(result);
  return result;
};

module.exports = {
  addUser,
  userLogin,
  getUsers,
  getUserById,
};
