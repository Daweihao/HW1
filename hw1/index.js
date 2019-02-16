var express = require('express');
var router = express.Router();
let myObj = {Name:'Haoran'};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/show', function (req, res) {
  // req.on('data', function (chunk) {
  //   content += chunk;
  // });
  // req.on('end', function (){
  //   res.writeHead(200, {"Content-Type":"x-www-form-urlencoded"});
  //   res.write("You've sent:  "+ content);
  //   res.end();
  // }
  // );
  res.send(myObj);
});
module.exports = router;
