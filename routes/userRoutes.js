const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/user', userController.addUser);
router.post('/login', userController.userLogin);

module.exports = router;
