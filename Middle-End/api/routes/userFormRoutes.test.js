/*
const request = require('supertest');
const app = require('../../../Back-End/server'); 
const mongoose = require('mongoose');
const UserForm = require('../../../Back-End/database/models/UserFormModel');
describe('UserForm CRUD operations', () => {
    let userFormId;

    beforeAll(async () => {
        // Connect to the test database
        await mongoose.connect(process.env.TEST_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Disconnect from the test database
        await mongoose.disconnect();
    });

    test('should create a new user form', async () => {
        const newUserFormData = {
            // ... provide necessary data structure for a new user form
        };

        const response = await request(app)
            .post('/user-forms') // Update the path to match your route for creating a user form
            .send(newUserFormData);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        userFormId = response.body._id; // Save the ID for later use in tests
    });

    test('should fetch a user form', async () => {
        const response = await request(app)
            .get(`/user-forms/${userFormId}`); // Update the path to match your route for fetching a user form by ID

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', userFormId);
    });

    test('should update a user form', async () => {
        const updatedUserFormData = {
            // ... provide updated data for the user form
        };

        const response = await request(app)
            .put(`/user-forms/${userFormId}`) // Update the path to match your route for updating a user form by ID
            .send(updatedUserFormData);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(updatedUserFormData);
    });

    test('should delete a user form', async () => {
        const response = await request(app)
            .delete(`/user-forms/${userFormId}`); // Update the path to match your route for deleting a user form by ID

        expect(response.status).toBe(204); // 204 is typically returned for a successful DELETE request
    });
});
*/
