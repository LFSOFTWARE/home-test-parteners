const express = require('express');
const router = express.Router();

const arquivo1Routes = require('./files');


router.use('/files', arquivo1Routes);


module.exports = router;
