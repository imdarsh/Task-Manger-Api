const Task = require('../models/Task'); 

const getAllTasks = (req,res) => {
    res.send('All Items');
}

const getTasks = (req,res) => {
    res.json({id:req.params.id });
}

const createTasks = async (req,res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch(error){
        res.status(500).json({ message: error })
    }
}

const updateTasks = (req,res) => {
    res.send('Task Updated');
}

const deleteTasks = (req,res) => {
    res.send('Task Deleted');
}

module.exports = {
    getAllTasks,
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
}