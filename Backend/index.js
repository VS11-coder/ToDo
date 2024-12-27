const express = require('express');
const app = express();
app.use(express.json());
const { createToDo, updateToDo } = require('./types');
app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "Invalid inputs",
        })
        return;
    }
});
app.get('/todos', (req, res) => {

});
app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg : "Invalid inputs",
        })
        return;
    }
});
app.listen(3000, () => {   
    console.log('Server is running on port 3000');
});
