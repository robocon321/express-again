var express=require('express');
var router=express.Router();
var controller=require('../controllers/userController.js');
var db=require('../db.js');
var bodyParser=require('body-parser');
var authentication=require('../controllers/userAuthentication.js');
var cookieParser=require('cookie-parser');

router.use(cookieParser());
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
router.get('/', authentication.getAuthentication, controller.index);

router.get('/search' , authentication.getAuthentication, controller.search);

router.get('/create' , authentication.getAuthentication, controller.getCreate);

router.post('/create' , authentication.getAuthentication, controller.postCreate);

router.get('/:id' , authentication.getAuthentication, controller.findID);


module.exports=router;