const express = require('express');
const loginRouter = express.Router();
const { login, handleLogin } = require('../controllers/loginController');

loginRouter.get('/', login);

loginRouter.post('/', handleLogin);

module.exports = loginRouter;
