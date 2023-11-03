const request = require('supertest');
const app = require('../../../Back-End/server'); // Adjust this path to the location of your Express app
const mongoose = require('mongoose');
const Response = require('../../../Back-End/database/models/ResponseModel'); // Adjust the path to your Response model

describe('Response CRUD operations', () => {
    let responseId;

    beforeAll(async () => {
        // Connect to a test database if needed
        await mongoose.connect(process.env.TEST_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Disconnect from the test database
        await mongoose.disconnect();
    });

    test('should create a new response', async () => {
        const newResponseData = {
            // ... provide the necessary data structure for a new response
        };

        const response = await request(app)
            .post('/responses') // Update the path to match your route for creating a response
            .send(newResponseData);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        responseId = response.body._id; // Save the ID for later use in tests
    });

    test('should fetch a response', async () => {
        const response = await request(app)
            .get(`/responses/${responseId}`); // Update the path to match your route for fetching a response by ID

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', responseId);
    });

    test('should update a response', async () => {
        const updatedResponseData = {
            // ... provide updated data for the response
        };

        const response = await request(app)
            .put(`/responses/${responseId}`) // Update the path to match your route for updating a response by ID
            .send(updatedResponseData);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(updatedResponseData);
    });

    test('should delete a response', async () => {
        const response = await request(app)
            .delete(`/responses/${responseId}`); // Update the path to match your route for deleting a response by ID

        expect(response.status).toBe(204); // 204 is typically returned for a successful DELETE request
    });
});
