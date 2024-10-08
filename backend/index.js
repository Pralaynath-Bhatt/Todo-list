const express = require("express");
const {createTodo} = require("./types");
const { todo } = require("./db");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

app.post("./todo",async (req,res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
        completed: false
    })
    
    res.json({
        msg:"todo created"})
});

app.get("./todos",async (req,res) =>{
    const todos = await todo.find();
    res.json({
        todos
    })
});
   
app.put("./completed",async(req,res) =>{
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);