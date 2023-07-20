const express=require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../Controllers/taskController");
const router=express.Router();

router.route("/tasks").get(getTasks);
router.route("/task").post(createTask);
router.route("/task/:id").put(updateTask);
router.route("/task/:id").delete(deleteTask);

module.exports=router;