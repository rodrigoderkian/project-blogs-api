const express = require('express');
const { postController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const router = express.Router();

router.post(
  '/post',
  authMiddleware.checkIfUserIsAuthenticated,
  postController.addPost,
);
router.get(
  '/post',
  authMiddleware.checkIfUserIsAuthenticated,
  postController.getPosts,
);

module.exports = router;
