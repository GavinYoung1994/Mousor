var express = require('express');
var app = express();
var robot = require('robotjs');
app.use(express.static( __dirname ));
app.get('/send',function(req,res,next){
	console.log("rotate",req.query.rotate)
	console.log("yspeed",req.query.up)
	console.log('xspeed',req.query.side)
	robot.moveMouseSmooth(req.query.x, req.query.y);
	/*if(parseInt(req.query.rotate)>5){
		robot.mouseClick();
	}*/
	// if(parseInt(req.query.up)>15){
	// 	robot.keyTap('pageup');
	// }else if(parseInt(req.query.up)<(-15)){
	// 	robot.keyTap('pagedown');
	// }
	res.json("great");
})
app.listen(3000);