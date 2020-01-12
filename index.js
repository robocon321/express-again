var express=require('express');
var app=express();

app.get('',function(req,res){
	res.send("Hello wolrd");
});

app.listen(3000,function(){
	console.log("Server have localhost is 3000");
});