var express=require('express');
var app=express();

var port=3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(req,res){
	res.render('index',{
		name:"Robocon321#"
	});
});

app.get('/users',function(req,res){
	res.render('users',{
		users:[
			{name:"Hong 10",phone:"0354334442"},
			{name:"Wing",phone:"0923839923"},
			{name:"Skim",phone:"0394983959"}
		]
	})
})

app.listen(port,function(){
	console.log("Server have localhost is "+port);
});