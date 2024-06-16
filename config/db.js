const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
    process.exit();
});