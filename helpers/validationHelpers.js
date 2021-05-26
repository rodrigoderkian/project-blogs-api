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

const checkIfEmailAndPasswordExist = (email, password) => {
  if (email === undefined) {
    throw new CustomError({
      status: 400,
      message: '"email" is required',
    });
  }
  if (password === undefined) {
    throw new CustomError({
      status: 400,
      message: '"password" is required',
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

const checkIfEmailAlreadyExist = (verifyEmail) => {
  if (verifyEmail) {
    throw new CustomError({
      status: 409,
      message: 'User already registered',
    });
  }
};

const checkIfUserExist = (verifyUser) => {
  if (!verifyUser) {
    throw new CustomError({
      status: 400,
      message: 'Invalid fields',
    });
  }
};

const checkIfEmailAndPasswordIsEmpty = (email, password) => {
  if (email === '') {
    throw new CustomError({
      status: 400,
      message: '"email" is not allowed to be empty',
    });
  }
  if (password === '') {
    throw new CustomError({
      status: 400,
      message: '"password" is not allowed to be empty',
    });
  }
};

const checkIfUserIdExist = (id) => {
  if (!id) {
    throw new CustomError({
      status: 404,
      message: 'User does not exist',
    });
  }
};

const checkIfNameExist = (name) => {
  if (name === undefined) {
    throw new CustomError({
      status: 400,
      message: '"name" is required',
    });
  }
};

module.exports = {
  checkIfDisplayNameHave8Chars,
  checkIfEmailIsValid,
  checkIfPasswordHave6Chars,
  checkIfEmailAlreadyExist,
  checkIfEmailAndPasswordExist,
  checkIfUserExist,
  checkIfEmailAndPasswordIsEmpty,
  checkIfUserIdExist,
  checkIfNameExist,
};
