const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo:String , 
    description:String,
    iscompleted:Boolean
});

const Todo = mongoose.model("Todo" , todoSchema);


module.exports=  { Todo }; 