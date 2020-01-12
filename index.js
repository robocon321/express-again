var express=require('express');
var app=express();

var port=3000;

var users=[
			{name:"Hong 10",phone:"0354334442"},
			{name:"Wing",phone:"0923839923"},
			{name:"Skim",phone:"0394983959"}
		];

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',function(req,res){
	res.render('index',{
		name:"Robocon321#"
	});
});

app.get('/users',function(req,res){
	res.render('users',{users:users})
})

app.get('/users/search',function(req,res){
	var q=req.query.q;
	console.log(q);
	var arr=users.filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase())>=0;
	});
	res.render('users/search',{users:arr});
})

app.get('/users/create',function(req,res){
	res.render('users/create');
})
app.listen(port,function(){
	console.log("Server have localhost is "+port);
});