let mongoose=require('mongoose');
let taskSchema=mongoose.Schema({
    task_name:{
        type:String,
        required:true
    },
    task_desc:{
        type:String,

    },
    task_duedate:{
        type:Date,
        
    },
    task_assignedBy:{
        type:
    },
    task_assignedTo:{
        type:
    },
})