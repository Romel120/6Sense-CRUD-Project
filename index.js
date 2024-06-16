const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');
const employeeRoutes = require('./routes/route');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employees', employeeRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Employee Management System" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
