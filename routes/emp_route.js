let express=require('express');
let router=express.Router()
// Router() used to connect api with comman route
router.post("/register",(req,res)=>{
    res.send("register route called");
})
router.post("/login",(req,res)=>{
    res.send("login router called");
})
router.get("/viewtask",(req,res)=>{
    res.send("viewtask router called");
})
router.patch("/updateprofile",(req,res)=>{
    res.send("updateprofile router called");
})
module.exports=router;