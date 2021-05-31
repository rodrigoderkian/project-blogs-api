const { User, BlogPost, PostCategory, Category } = require('../models');
const { validationHelpers } = require('../helpers');

const addPost = async (title, content, categoryIds, email) => {
  const { id } = await User.findOne({ where: { email } });
  validationHelpers.checkIfDataExist(title, content, categoryIds);
  const categories = await Category.findAll({ where: { id: categoryIds } });
  validationHelpers.checkIfCategoryAlreadyExist(categories, categoryIds);
  const { dataValues } = await BlogPost.create({
    title,
    content,
    userId: id,
    published: Date.now(),
    updated: Date.now(),
  });
  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({ postId: dataValues.id, categoryId });
  });
  return validationHelpers.optimizeReturn(dataValues);
};

const getPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = {
  addPost,
  getPosts,
};
