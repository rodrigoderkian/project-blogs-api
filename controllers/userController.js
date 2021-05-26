const { userServices } = require('../services');

const addUser = async (request, response) => {
  try {
    const { displayName, email, password, image } = request.body;
    const result = await userServices.addUser(
      displayName,
      email,
      password,
      image,
    );
    return response.status(201).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

const userLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const result = await userServices.userLogin(email, password);
    return response.status(200).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

const getUsers = async (request, response) => {
  try {
    const result = await userServices.getUsers();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  userLogin,
  getUsers,
};
