var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/', function(req, res, next) {

var stdid = req.body.stdid;
var stdname = req.body.stdname;

console.log(stdid + " " + stdname);
console.log("Login OK ");

  res.render('index');
});


module.exports = router;
