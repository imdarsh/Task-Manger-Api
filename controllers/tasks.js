const req = require('express/lib/request');
const res = require('express/lib/response');
const Task = require('../models/Task'); 


// Get All Tasks
const getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    }catch(error){
        res.status(500).json({ message: error });
    } 

}

// Get Single Task
const getTasks = async (req,res) => {
    try{
        const task = await Task.findOne({ _id: req.params.id });
        if(!task){
            return res.status(404).json({ message: 'No Such Task' });
        }
        res.status(200).json({ task });
    }catch(error){
        res.status(500).json({ message: error });
    }
}


// Create Tasks
const createTasks = async (req,res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch(error){
        res.status(500).json({ message: error })
    }
}

// Update Task
const updateTasks = async (req,res) => {
    try{
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new:true,
            runValidators: true
        });
        res.status(200).json({ task });
    }catch(error){
        res.status(500).json({ message: error });
    }
}

// Delete Single Task
const deleteTasks = async (req,res) => {
    try{
        const task = await Task.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ task });
    }catch(error){
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getAllTasks,
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
}