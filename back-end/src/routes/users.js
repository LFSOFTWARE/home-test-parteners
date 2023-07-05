var express = require('express');
var router = express.Router();

const { find } = require('../controllers/UserController');

router.get('/', find)



module.exports = router;