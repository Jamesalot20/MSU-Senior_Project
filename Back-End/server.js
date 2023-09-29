const express = require('express');
const app = express();

// Routes
const formTemplateRoutes = require('./routes/formTemplateRoutes');
const userRoutes = require('./routes/userRoutes');
const userFormRoutes = require('./routes/userFormRoutes');
const responseRoutes = require('./routes/responseRoutes');

app.use(express.json()); // Middleware to parse JSON request bodies

// Using the routes
app.use(formTemplateRoutes);
app.use(userRoutes);
app.use(userFormRoutes);
app.use(responseRoutes);

// ... other app configurations ...

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
