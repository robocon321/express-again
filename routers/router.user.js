var express=require('express');
var router=express.Router();
var controller=require('../controllers/userController.js');
var db=require('../db.js');
var bodyParser=require('body-parser');

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/create',controller.getCreate);

router.post('/create',controller.postCreate);

router.get('/:id',controller.findID);


module.exports=router;