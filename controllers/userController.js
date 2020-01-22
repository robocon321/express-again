var express=require('express');
var shortid=require('shortid');
var db=require('../db.js');
var users=db.get('users').value();

module.exports.index=function(req,res){
	res.render('users',{users:users})
}

module.exports.search=function(req,res){
	var q=req.query.q;
	var arr=users.filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase())>=0;
	});
	res.render('users/search',{users:arr});
}

module.exports.getCreate=function(req,res){
	res.render('users/create');
}

module.exports.postCreate=function(req,res){
	var errs=[];
	if(req.body.name==""){
		errs.push("Don't required your name")
	}
	if(req.body.phone==""){
		errs.push("Don't required your phone")
	}
	if(errs.length>0){
		res.render('../views/users/create.pug',{
			errs:errs,
			name:req.body.name,
			phone:req.body.phone
		})
		return;
	}
	var path='.'+req.file.destination.slice(8)+'/'+req.file.filename;

	db.get('users').push({	name:req.body.name,
							phone:req.body.phone,
							id:shortid.generate(),
							path:path
	}).write();
	res.redirect('/users');
}

module.exports.findID=function(req,res){
	var id=req.params.id;
	var user=db.get('users').find({id:id}).value();
	res.render('../views/users/user.pug',{
		user:user
	})
}