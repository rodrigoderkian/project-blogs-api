const { Category } = require('../models');
const { validationHelpers } = require('../helpers');

const addCategory = async (name) => {
  validationHelpers.checkIfNameExist(name);
  const result = await Category.create({ name });
  return result;
};

const getCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  addCategory,
  getCategories,
};
