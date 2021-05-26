const express = require('express');
const { userController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const router = express.Router();

router.get(
  '/user',
  authMiddleware.checkIfUserIsAuthenticated,
  userController.getUsers,
);
router.post('/user', userController.addUser);
router.post('/login', userController.userLogin);

module.exports = router;
