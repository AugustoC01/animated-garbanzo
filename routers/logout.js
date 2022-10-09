const express = require('express');
const { handleLogout } = require('../controllers/loginController');
const logoutRouter = express.Router();

logoutRouter.get('/', handleLogout);

module.exports = logoutRouter;
