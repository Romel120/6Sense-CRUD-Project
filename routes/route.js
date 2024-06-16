const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/controller');

// Create a new employee
router.post('/', employeeController.createEmployee);

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Get employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Update employee by ID
router.patch('/:id', employeeController.updateEmployee);

// Block employee by ID
router.patch('/:id/block', employeeController.blockEmployee);

// Unblock employee by ID
router.patch('/:id/unblock', employeeController.unblockEmployee);

// Delete employee by ID
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
