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

module.exports = {
  addUser,
};