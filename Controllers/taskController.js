const Task=require("../Models/task");

exports.getTasks=async(req,res)=>{
   try{
    const tasks=await Task.find();
    res.status(200).json(tasks);
   }
   catch(err)
   {
    console.log(err);
   }
    
}

exports.createTask=async(req,res)=>{

    const {task}=req.body;
    await Task.create({task}).then((data)=>{
       res.status(201).json(data)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    })
}

exports.updateTask=async(req,res)=>{

    const id=req.params.id;
    const {task}=req.body;

    Task.findByIdAndUpdate(id,{task})
    .then((data)=>{
        res.status(201).json(data);
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

exports.deleteTask=async(req,res)=>{
    const id=req.params.id;
     
    Task.findByIdAndRemove(id).then((data)=>{
        res.status(201).json(data)
    }).catch((err)=>{
        res.status(500).json(err);
    })
}