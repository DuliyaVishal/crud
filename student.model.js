const mongoose=require("mongoose");

//schema

const studentSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    city:{type:String,required:false},
    dist:{type:String,required:false}
});
module.exports=mongoose.model("student",studentSchema);