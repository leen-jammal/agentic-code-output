const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().sort({ timestamp: -1 });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/complete/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todo.complete = !todo.complete;
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;