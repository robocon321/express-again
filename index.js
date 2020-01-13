var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
 
var adapter = new FileSync('db.json');
var db = low(adapter);

var port=3000;

db.defaults({users:[]})
  .write();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users=db.get('users').value();

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
	var arr=users.filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase())>=0;
	});
	res.render('users/search',{users:arr});
})

app.get('/users/create',function(req,res){
	res.render('users/create');
})

app.post('/users/create',function(req,res){
	db.get('users').push({name:req.body.name,phone:req.body.phone}).write();
	res.redirect('/users');
})

app.listen(port,function(){
	console.log("Server have localhost is "+port);
});