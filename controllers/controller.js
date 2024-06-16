const Employee = require('../models/model');

// Create a new employee
const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update employee by ID
const updateEmployee = async (req, res) => {
    try {
        if ('email' in req.body) {
            console.log('Email can not be updated');
            delete req.body.email;
        }
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Block employee by ID
const blockEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee) {
            employee.isBlocked = true;
            const updatedEmployee = await employee.save();
            res.json(updatedEmployee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Unblock employee by ID
const unblockEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee) {
            employee.isBlocked = false;
            const updatedEmployee = await employee.save();
            res.json(updatedEmployee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete employee by ID
const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    blockEmployee,
    unblockEmployee,
    deleteEmployee
};