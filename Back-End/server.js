const express = require('express');
const app = express();
const formTemplateRoutes = require('./routes/formTemplateRoutes');

app.use(express.json()); // To parse JSON request bodies

// Use the routes
app.use(formTemplateRoutes);

// ... other app configurations ...

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
