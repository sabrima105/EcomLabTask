var express = require('express');
var router = express.Router();

var Index=require('../models/studentmodel'); /*conect with studentmodel.js*/



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/student', function(req, res, next) {
  res.render('student');
});

router.get('/stable',function(req,res,next){
	Index.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('stable',{info:results});
    	}
  	});
});



router.post('/student', function(req, res, next) {

var stdid = req.body.stdid;
var stdname = req.body.stdname;
var stddpt = req.body.stddpt;
var stdage = req.body.stdage;
var stdcn = req.body.stdcn;

console.log(stdid + " _" + stdname + "_" + stddpt + "_" + stdage + "_" + stdcn );
console.log("Login Sucessfully ");

var query={stdid:stdid};/*NEw pdate*/

Index.findOneAndUpdate(query,{
  $set:{
    stdname:stdname,
    stdid:stdid,
    stddpt:stddpt,
    stdage:stdage,
    stdcn,stdcn
  }
},{
  new:true,
  upsert:true
},function(err, doc){
  if (err) {
    console.log("Spmething Wrong!!!CANdy");
  }
});
  
  res.redirect('/stable');
});

module.exports = router;
