const express = require('express');
const router = express.Router();

const filesRoute = require('./files');
const usersRoute = require('./users');


router.use('/files', filesRoute);
router.use('/users', filesRoute);


module.exports = router;
