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

}