var express=require('express');
var bodyParser=require('body-parser');
var dotenv=require('dotenv').config();
var app=express();

var userRouter=require('./routers/router.user.js');
var userAuthentication=require('./routers/router.authentication.js');
var userGoods=require('./routers/router.goods.js');

var port=process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/users',userRouter);
app.use('/login',userAuthentication);
app.use('/goods',userGoods);
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index',{
		name:"Robocon321#"
	});
});


app.listen(port,function(){
	console.log("Server have localhost is "+port);
});