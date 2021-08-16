const express = require('express');
const temasRouter = express.Router();
const tema1Services = require('../src/services/tema1')

temasRouter.post('/tema1', tema1Services.tema1)


module.exports=temasRouter

