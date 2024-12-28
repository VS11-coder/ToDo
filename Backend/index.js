const express = require('express');
const app = express();
app.use(express.json());
const { createToDo, updateToDo } = require('./types');
const { Todo } = require('./db');

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "Invalid inputs",
        })
        return;
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg : "Todo created successfully",
    });
});

app.get('/todos', async (req, res) => {
    const todos = await todos.find();
    res.json(todos);
    // Todo.findAll().then(todos => {
    //     res.json(todos);
    // }
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "Invalid inputs",
        })
        return;
    }
    await Todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg : "Todo marked as completed",
    });
});

app.listen(3000, () => {   
    console.log('Server is running on port 3000');
});
