var express=require('express');
var router=express.Router();
var controller=require('../controllers/userController.js');
var db=require('../db.js');
var authentication=require('../controllers/userAuthentication.js');

var multer=require("multer");
var upload=multer({dest:'./public/uploads'});

var cookieParser=require('cookie-parser');

router.use(cookieParser());
router.get('/', authentication.getAuthentication, controller.index);

router.get('/search' , authentication.getAuthentication, controller.search);

router.get('/create' , authentication.getAuthentication, controller.getCreate);

router.post('/create' , authentication.getAuthentication, upload.single('image'), controller.postCreate);

router.get('/:id' , authentication.getAuthentication, controller.findID);


module.exports=router;