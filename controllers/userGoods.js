var db=require('../db.js');
var goods=db.get('goods').value();

module.exports.getGoods=function(req,res){
	var page=req.query.page;
	if(!page){
		page=1;
	}
	if(page<=0 || page>=goods.length/20+1){
		res.send("<h1>Page out</h1>");
	}
	res.render('../views/goods.pug',{
		page:page,
		goods:goods.slice((page-1)*20,(page-1)*20+20),
		pageMax:Math.ceil(goods.length/20)
	});
}

module.exports.addToCart=function(req,res){
	var itemCart=db.get('cart').find({id:req.query.id}).value();
	console.log(itemCart);
	if(!itemCart){
		console.log("Don't have Item")
		db.get('cart').push({
			id:req.query.id,
			count:0
		}).write();
	}else {
		console.log("Have item");
		db.get('cart').find({id:req.query.id}).set("count",itemCart.count+1).write();
	}
	res.redirect('/goods/');
}