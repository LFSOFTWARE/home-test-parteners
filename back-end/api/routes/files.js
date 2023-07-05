var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ a: "a" })
})



module.exports = router;