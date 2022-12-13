const { response } = require("express");
const {Todo} = require("./models");

// const getAllStudentsOld = (request, response) => {
//     var students = ["vatsal", "prateek", "rahul", "jatin"];
//     var studentId = request.query.id;
//     return response.json(
//         studentId !== undefined ? students[studentId - 1] : students
//     );
// };
 
const getAllTodos = async (request , response)=> {
    var _id = request.query._id;
    if(_id){
        var allTodos = await Todo.findById(_id);
    }
    else{
        var allTodos = await Todo.find();
    }

    
    return response.json(allTodos);
};

const createTodo =async (request, response) => {
    console.log(request.body);
    await Todo.create(request.body); //Create New Todo in Database
    return response.json({ status: "Todo Created" });
};

const updateTodo =async (request , response) =>{
    // await Student.updateOne(request.body);
    var _id = request.query._id;
    var data = request.body;
    console.log(_id , data);
    await Todo.findByIdAndUpdate(_id , data);

    return response.json({status: "Todo Updated"});
};

const deleteTodo = async (request , response) =>{
    var _id = request.query._id;
    //var data = request.body;
    console.log(_id);
    await Todo.findByIdAndDelete(_id);

    return response.json({status: "Todo Deleted"});
};

const patchTodo =async (request , response) =>{
    // await Student.updateOne(request.body);
    var _id = request.query._id;
    var data = request.body;
    console.log(_id , data);
    await Todo.findByIdAndUpdate(_id , data);

    return response.json({status: "Todo Patched"});
};


module.exports = { getAllTodos , createTodo , updateTodo , deleteTodo , patchTodo};


