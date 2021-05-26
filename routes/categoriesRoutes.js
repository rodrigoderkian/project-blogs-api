const express = require('express');
const { categoriesController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const router = express.Router();

router.post(
  '/categories',
  authMiddleware.checkIfUserIsAuthenticated,
  categoriesController.addCategory,
);
router.get(
  '/categories',
  authMiddleware.checkIfUserIsAuthenticated,
  categoriesController.getCategories,
);

module.exports = router;
