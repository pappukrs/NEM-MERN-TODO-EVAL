const express=require('express');
const { createTodo, fetchTodos, fetchTodo ,updateTodo} = require('../controller/todoCtrl');

const route=express.Router();

createTodo

route.post('/todos',(req,res)=>{
    res.send("Todo Post")
})

route.get('/todos',fetchTodos);
route.get('/todo/:id',fetchTodo);
route.put('/todo/:id',updateTodo);


module.exports={route}