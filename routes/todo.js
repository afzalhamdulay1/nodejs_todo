const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/add/todo', (req, res) => {
    const { title, description, dueDate } = req.body;

    const newTodo = new Todo({ title, description, dueDate });

    newTodo.save()
        .then(() => {
            console.log('Successfully added todo');
            res.redirect('/');
        })
        .catch(err => console.log(err));
});

router.get('/delete/todo/:_id', (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log('Successfully deleted');
            res.redirect('/');
        })
        .catch(err => console.log(err));
});

router.get('/edit/todo/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.render('editTodo', { todo, message: null });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/edit/todo/:id', async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        await Todo.findByIdAndUpdate(req.params.id, { title, description, dueDate });
        const updatedTodo = await Todo.findById(req.params.id);
        res.render('editTodo', { todo: updatedTodo, message: 'Todo Updated Successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/update/todo/:id', async (req, res) => {
    try {
        const { completed } = req.body;
        await Todo.findByIdAndUpdate(req.params.id, { completed });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
