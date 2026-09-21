let express=require('express');
let app=express();
let emproutes=require('./routes/emp_route');
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