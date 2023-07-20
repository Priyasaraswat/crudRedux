const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
  
    task:{
        type:String,
        required:[true,"Enter the task"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports= mongoose.model("Task",taskSchema);