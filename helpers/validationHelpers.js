const { CustomError } = require('./errorHelper');

const checkIfDisplayNameHave8Chars = (displayName) => {
  if (displayName.length < 8) {
    throw new CustomError({
      status: 400,
      message: '"displayName" length must be at least 8 characters long',
    });
  }
};

const checkIfEmailIsValid = (email) => {
  const regex = /\S+@\S+\.\S+/.test(email);
  if (!regex) {
    throw new CustomError({
      status: 400,
      message: '"email" must be a valid email',
    });
  }
};

const checkIfEmailExist = (email) => {
  if (!email) {
    throw new CustomError({
      status: 400,
      message: '"email" is required',
    });
  }
};

const checkIfPasswordHave6Chars = (password) => {
  if (password.length < 6) {
    throw new CustomError({
      status: 400,
      message: '"password" length must be 6 characters long',
    });
  }
};

const checkIfPasswordExist = (password) => {
  if (!password) {
    throw new CustomError({
      status: 400,
      message: '"password" is required',
    });
  }
};

const checkIfEmailAlreadyExist = (verifyEmail) => {
  if (verifyEmail) {
    throw new CustomError({
      status: 409,
      message: 'User already registered',
    });
  }
};

module.exports = {
  checkIfDisplayNameHave8Chars,
  checkIfEmailIsValid,
  checkIfEmailExist,
  checkIfPasswordHave6Chars,
  checkIfPasswordExist,
  checkIfEmailAlreadyExist,
};
