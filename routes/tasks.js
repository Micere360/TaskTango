const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Get all tasks
router.get('/', tasksController.getAllTasks);

// Get a specific task by ID
router.get('/:taskId', tasksController.getTaskById);

// Create a new task
router.post('/', tasksController.createTask);

// Update a task by ID
router.put('/:taskId', tasksController.updateTask);

// Prioritize a task by setting its priority
router.put('/:taskId/prioritize', tasksController.prioritizeTask);

// Delete a task by ID
router.delete('/:taskId', tasksController.deleteTask);

module.exports = router;
