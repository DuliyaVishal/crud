const studentModel  = require("../models/student.model")
let create=async(req,res)=>{
    let student=new studentModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        city:req.body.city,
        dist:req.body.dist,
          });
    try {
       const saved=await student.save();
       res.json(saved);
    } catch (error) {
        res.send("error"+error);

    }
}
module.exports=create;