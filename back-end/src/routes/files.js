var express = require('express');
var router = express.Router();

const { create } = require('../controllers/FileController');
const upload = require('../middlewares/upload');

router.post('/',upload.single('csvFile'), create)



module.exports = router;