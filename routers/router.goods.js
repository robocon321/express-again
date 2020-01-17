var express=require('express');
var router=express.Router();
var goods=require('../controllers/userGoods.js');

router.get('',goods.getGoods);
router.get('/add-to-cart',goods.addToCart);

module.exports=router;