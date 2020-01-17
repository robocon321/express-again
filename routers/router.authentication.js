var express=require('express');
var router=express.Router();
var authentication=require('../controllers/userAuthentication.js');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');

router.use(cookieParser());
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/',authentication.getAuthentication);
router.post('/',authentication.postAuthentication);

module.exports=router;