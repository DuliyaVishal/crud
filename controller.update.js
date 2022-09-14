const student  = require("../models/student.model")
let update=async (req,res)=>{
    try {
        const studentUpdate=await student.findByIdAndUpdate(
            req.params.id,
            req.body
        )
        res.json(studentUpdate);
    } catch (error) {
        res.send("error"+error);
    }
}
module.exports=update;