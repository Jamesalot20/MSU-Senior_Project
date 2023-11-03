const request = require('supertest');
const app = require('../../../Back-End/server'); // Update this path as necessary
const mongoose = require('mongoose');
const FormTemplate = require('../../../Back-End/database/models/FormTemplateModel');

describe('FormTemplate CRUD operations', () => {
    let templateId;

    beforeAll(async () => {
        // Connect to a test database
        await mongoose.connect(process.env.TEST_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Clean up and disconnect from the database
        await FormTemplate.deleteMany({});
        await mongoose.disconnect();
    });

    test('should create a new form template', async () => {
        const newTemplate = {
            // ... provide the necessary structure for your form template
        };

        const response = await request(app)
            .post('/formTemplates') // Replace with the actual route for creating a form template
            .send(newTemplate);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        templateId = response.body._id; // Save for use in subsequent tests
    });

    test('should retrieve all form templates', async () => {
        const response = await request(app)
            .get('/formTemplates'); // Replace with the actual route for retrieving all form templates

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test('should retrieve a specific form template', async () => {
        const response = await request(app)
            .get(`/formTemplates/${templateId}`); // Replace with the actual route for retrieving a specific template

        expect(response.status).toBe(200);
        expect(response.body._id).toEqual(templateId);
    });

    test('should update a form template', async () => {
        const updatedTemplateData = {
            // ... provide the updated data for the form template
        };

        const response = await request(app)
            .put(`/formTemplates/${templateId}`) // Replace with the actual route for updating a form template
            .send(updatedTemplateData);

        expect(response.status).toBe(200);
        // Depending on your API, you might check for the updated fields specifically
        expect(response.body).toMatchObject(updatedTemplateData);
    });

    test('should delete a form template', async () => {
        const response = await request(app)
            .delete(`/formTemplates/${templateId}`); // Replace with the actual route for deleting a form template

        expect(response.status).toBe(204);
    });
});
