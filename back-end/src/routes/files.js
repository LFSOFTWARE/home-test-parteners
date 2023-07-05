var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  res.json({ a: "a" })
})



module.exports = router;