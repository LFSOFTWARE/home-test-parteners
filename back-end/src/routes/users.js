var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.find)



module.exports = router;