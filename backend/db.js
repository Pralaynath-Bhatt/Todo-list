const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://pranjalbhattt04:rWyx2gp8M5r3Ben3@root.zabwvfj.mongodb.net/todo");
const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
});
const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}