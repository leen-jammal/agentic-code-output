const Todo = require('../models/Todo');

// Get all todos
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single todo by ID
const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new todo
const createTodo = async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed || false,
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a todo
const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};