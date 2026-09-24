let express=require('express');
let app=express();
let mongoose=require('mongoose');
let emproutes=require('./routes/emp_route');
mongoose.connect("mongodb://localhost:27017/hrmanagement")
.then(()=>console.log("db connected sucessfully"))
.catch((err)=>console.log(err))

app.use(express.json()); // used to collect input from UI as JSON data
app.use("/api/emp",emproutes);
//localhost:3000/api/emp/register =>post
//localhost:3000/api/emp/login =>post
//localhost:3000/api/emp/viewtask =>post
//localhost:3000/api/emp/updateprofile=>patch
let hrroutes=require('./routes/hr_route');
app.use("/api/hr",hrroutes);
//localhost:3000/api/hr/viewemp =>get
//localhost:3000/api/hr/assign-task =>post
//localhost:3000/api/hr/deleteemp =>delete
//localhost:3000/api/hr/viewtask=>get
// run the server
app.listen(3000,()=>{
    console.log("server lisening on port 3000");
    
})