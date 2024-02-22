// controllers/tasksController.js
const Task = require('../models/Task');
const { successResponse, errorResponse } = require('../utils/response');

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    successResponse(res, tasks);
  } catch (error) {
    errorResponse(res, 'Error fetching tasks');
  }
};

// Get a specific task by ID
const getTaskById = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return errorResponse(res, 'Task not found', 404);
    }
    successResponse(res, task);
  } catch (error) {
    errorResponse(res, 'Error fetching task');
  }
};

// Create a new task
const createTask = async (req, res) => {
  const { title, description, priority } = req.body;
  const newTask = new Task({ title, description, priority });

  try {
    const savedTask = await newTask.save();
    successResponse(res, savedTask, 'Task created successfully');
  } catch (error) {
    errorResponse(res, 'Error creating task');
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  const taskId = req.params.taskId;
  const { title, description, priority } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description, priority },
      { new: true } // Return the updated task
    );

    if (!updatedTask) {
      return errorResponse(res, 'Task not found', 404);
    }

    successResponse(res, updatedTask, 'Task updated successfully');
  } catch (error) {
    errorResponse(res, 'Error updating task');
  }
};

// Prioritize a task by setting its priority
const prioritizeTask = async (req, res) => {
  const taskId = req.params.taskId;
  const { priority } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { priority },
      { new: true } // Return the updated task
    );

    if (!updatedTask) {
      return errorResponse(res, 'Task not found', 404);
    }

    successResponse(res, updatedTask, 'Task prioritized successfully');
  } catch (error) {
    errorResponse(res, 'Error prioritizing task');
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return errorResponse(res, 'Task not found', 404);
    }

    successResponse(res, deletedTask, 'Task deleted successfully');
  } catch (error) {
    errorResponse(res, 'Error deleting task');
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  prioritizeTask,
  deleteTask,
};
