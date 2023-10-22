const express = require('express');
const app = express();
const connectDB = require('./database/db-config'); // Import the database function

// Routes
const formTemplateRoutes = require('../Middle-End/api/routes/formTemplateRoutes');
const userRoutes = require('../Middle-End/api/routes/userRoutes');
const userFormRoutes = require('../Middle-End/api/routes/userFormRoutes');
const responseRoutes = require('../Middle-End/api/routes/responseRoutes');

app.use(express.json()); // Middleware to parse JSON request bodies

// Using the routes
app.use(formTemplateRoutes);
app.use(userRoutes);
app.use(userFormRoutes);
app.use(responseRoutes);

// ... other app configurations ...
console.log(connectDB);
connectDB();

if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => {
        console.log('Server is up on port 3000');
    });
}

module.exports = app; // exporting the express app for supertest

