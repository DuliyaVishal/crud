const express= require("express");
const conn = require("./src/databases/database");
const app=express();

conn;

app.use(express.json());

const studentRouter= require("./src/routers/student.route");
app.use("/",studentRouter);

app.listen(2000, ()=> {console.log("server run on port 2000")})


