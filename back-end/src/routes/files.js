var express = require('express');
var router = express.Router();

const { create } = require('../controllers/FileController');

router.post('/', create)



module.exports = router;