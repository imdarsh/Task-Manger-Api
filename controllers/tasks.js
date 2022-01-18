const req = require('express/lib/request');
const res = require('express/lib/response');
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

// Get All Tasks
const getAllTasks = asyncWrapper(async (req,res) => {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
});

// Get Single Task
const getTasks = asyncWrapper(async (req,res, next) => {
        const task = await Task.findOne({ _id: req.params.id });
        if(!task){
            const error = new Error('Not Found');
            error.status = 404;
            return next(error);
        }
        res.status(200).json({ task });
});


// Create Tasks
const createTasks = asyncWrapper(async (req,res) => {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
});

// Update Task
const updateTasks = asyncWrapper(async (req,res) => {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new:true,
            runValidators: true
        });
        res.status(200).json({ task });
});

// Delete Single Task
const deleteTasks = asyncWrapper(async (req,res) => {
        const task = await Task.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ task });
});

module.exports = {
    getAllTasks,
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
}