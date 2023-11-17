const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const connectDB = require('./database/db-config');

// Routes
const formTemplateRoutes = require('../Middle-End/api/routes/formTemplateRoutes');
const userRoutes = require('../Middle-End/api/routes/userRoutes');
const userFormRoutes = require('../Middle-End/api/routes/userFormRoutes');
const responseRoutes = require('../Middle-End/api/routes/responseRoutes');

app.use(cors()); // Use CORS middleware
app.use(express.json());

// Using the routes with '/api' prefix
app.use('/api/form-templates', formTemplateRoutes);
app.use('/api/users', userRoutes);
app.use('/api/user-forms', userFormRoutes); // Adjusted the prefix here
app.use('/api/responses', responseRoutes);

// Database connection
console.log('Database connection status:', connectDB);
connectDB();

// Start the server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000; // Use PORT from environment or default to 3000
    app.listen(PORT, () => {
        console.log(`Server is up on port ${PORT}`);
    });
}

module.exports = app; // Exporting for testing
