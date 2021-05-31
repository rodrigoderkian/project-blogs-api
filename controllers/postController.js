const { postServices } = require('../services');

const addPost = async (request, response) => {
  try {
    const { title, content, categoryIds } = request.body;
    const { email } = request.email;
    const result = await postServices.addPost(
      title,
      content,
      categoryIds,
      email,
    );
    return response.status(201).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

const getPosts = async (request, response) => {
  try {
    const result = await postServices.getPosts();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  addPost,
  getPosts,
};
