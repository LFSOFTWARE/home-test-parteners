var express = require('express');
var router = express.Router();

const FileController = require('../controllers/FileController');
const upload = require('../middlewares/upload');

router.post('/',upload.single('csvFile'), FileController.create)



module.exports = router;