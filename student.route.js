const express = require("express");
const router= express.Router();
const show = require("../controllers/controller.read");
const create=require("../controllers/controller.post");
const update = require("../controllers/controller.update");
const remove = require("../controllers/controller.delete");
//const app =require("express")



router.get("/",show);
//router.get("/:id",showOne);
router.post("/p",create);
router.patch("/:id",update)
router.delete("/:id/itemDelete",remove)
module.exports=router;



