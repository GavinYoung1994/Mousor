var express = require('express');
var app = express();
var robot = require('robotjs');
app.use(express.static( __dirname ));
app.get('/send',function(req,res,next){
	console.log(req.query)
	robot.moveMouseSmooth(req.query.x, req.query.y);
	res.json("great");
})
app.listen(3000);