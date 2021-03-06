const { categoriesServices } = require('../services');

const addCategory = async (request, response) => {
  try {
    const { name } = request.body;
    const result = await categoriesServices.addCategory(name);
    return response.status(201).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

const getCategories = async (request, response) => {
  try {
    const result = await categoriesServices.getCategories();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  addCategory,
  getCategories,
};
