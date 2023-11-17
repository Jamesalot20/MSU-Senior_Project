const express = require('express');
const next = require('next');
const cors = require('cors'); // If needed for CORS

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // If you need to handle CORS
    server.use(cors());

    // Your API routes
    server.get('/api/myroute', (req, res) => {
        // Handle the request
        // Example response
        res.json({ message: 'Response from API' });
    });

    // Next.js page handling
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
