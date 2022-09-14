const student=require("../models/student.model");

let show= async (req,res)=>{
    try {
        let studentdata=await student.find();
        res.json(studentdata);
       
    } catch (error) {
        console.log("error" + error);
    }
};
//  let showOne= async(req,res)=>{
//      try {
//          let students=await student.findById(req.params.id);
//          res.json(students);
//      } catch (error) {
//          console.log("error" + error)
//      }
//  };
 module.exports= show;