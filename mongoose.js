var mongoose=require('mongoose');
mongoose.connect(process.env.MONGOOSE);

module.exports=mongoose;