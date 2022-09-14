const mongoose=require("mongoose")
const url="mongodb://localhost/wed";
const conn=mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser: true});

module.exports=conn;
