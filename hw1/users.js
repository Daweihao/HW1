var express = require('express');
var router = express.Router();
let myObj = {name:"Haoran Wei"};
let myJSON = JSON.stringify(myObj);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(myJSON);
});

module.exports = router;
