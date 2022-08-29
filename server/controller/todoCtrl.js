const { Todo } = require("../models/Todo")

const createTodo=async(req,res)=>{
try {
    const todo=await Todo.create({
        title:req.body.title,
    })
} catch (error) {
    res.json(error)
}
}


//fetch todo


const fetchTodos=(req,res)=>{
try {
    const todos=await Todo.find();
    res.json(todos)
} catch (error) {
    res.json(error)
}
}



const fetchTodo=(req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id);
        res.json(todo)
    } catch (error) {
        res.json(error)
    }
    }


    
const updateTodo=(req,res)=>{
    try {
        const todo=await Todo.findByIdAndUpdate(req.params,{
            title:req.body.title,
            status:req.body.status
        },{new:true,
        runValidators:true});
        res.json(todo)
    } catch (error) {
        res.json(error)
    }
    }


module.exports={createTodo,fetchTodos,fetchTodo,updateTodo}