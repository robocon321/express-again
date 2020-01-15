var db=require('../db.js');

module.exports.getAuthentication=function(req,res,next){
	if(req.cookies.name){
		next();
		return;
	}else {
		res.render('../views/users/authentication.pug');
	}
}

module.exports.postAuthentication=function(req,res,next){
	var errs=[];
	var username=req.body.username;
	var password=req.body.password;

	if(!username){
		errs.push("Don't required username");
	}

	if(!password){
		errs.push("Don't required password");
	}

	if(username && password){
		var user=db.get('authentications').find({username:username,password:password}).value();
		
		if(!db.get('authentications').find({username:username}).value()){
			errs.push("Don't exist username");
		}else if(!user){
			errs.push("Incorrect your password");
		}		
	}

	if(errs.length>0){
		res.render('../views/users/authentication.pug',{
			errs:errs,
			username:username,
			password:password
		});
		return ;
	}

	res.cookie('username', username);
	res.cookie('password', password);
	next();
}