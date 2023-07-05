var express = require('express');
var router = express.Router();

const { getUsers } = require('../controllers/UserController');

router.get('/', getUsers)



module.exports = router;