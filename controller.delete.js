const student=require("../models/student.model");
let remove = async(req,res)=>{
    try {
       const studentremove= await student.findById(req.params.id) ;
       studentremove.fname=req.body.fname,
       studentremove.lname=req.body.lname,
       studentremove.email=req.body.email,
       studentremove.city=req.body.city,
       studentremove.dist=req.body.dist

       const a1=studentremove.remove();
       res.json(a1)
    } catch (error) {
        res.send("error"+error);
    }


}

module.exports=remove;
