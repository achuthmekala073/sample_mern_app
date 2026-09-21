let express=require('express');
let router=express.Router()
// Router() used to connect api with comman route
router.get("/viewemp",(req,res)=>{
    res.send("viewemp route called");
})
router.post("/assign-task",(req,res)=>{
    res.send("assign-task router called");
})
router.delete("/deleteemp",(req,res)=>{
    res.send("deleteemp router called");
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
module.exports=router;