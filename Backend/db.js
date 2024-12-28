const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb+srv://vasudevsarraf11:Va100sa1@cluster0.ooh1h.mongodb.net/todo');
const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
});
const Todo = mongoose.model('Todo', todoSchema);
module.exports = {
    Todo
};
