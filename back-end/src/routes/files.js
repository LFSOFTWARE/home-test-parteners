var express = require('express');
var router = express.Router();

const FileController = require('../controllers/FileController');
const upload = require('../middlewares/upload');

router.post('/',upload.single('file'),(req, res, next) => {
  next();
}, FileController.create);




module.exports = router;