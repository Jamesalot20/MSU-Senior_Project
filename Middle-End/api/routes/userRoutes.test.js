
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../Back-End/server');

describe('User CRUD operations', () => {
    let userId; // to store user id for subsequent operations

    afterAll(async () => {
        await mongoose.connection.close(); // close the connection to db after tests
    });

test('should create a new user', async () => {
    const response = await request(app)
        .post('/user')  // corrected endpoint
        .send({
            Name: 'John Doe',
            Email: 'john.doe@test.com',
            Password: 'password123'
        });

    expect(response.status).toBe(201);
    expect(response.body.Name).toBe('John Doe');
    userId = response.body._id; // save the ID for other operations
}, 10000); // increased timeout if needed


    test('should fetch a user', async () => {
        const response = await request(app).get(`/users/${userId}`);
        expect(response.status).toBe(200);
        expect(response.body.Name).toBe('John Doe');
    });

    test('should update a user', async () => {
        const response = await request(app)
            .put(`/users/${userId}`)
            .send({
                Name: 'Jane Doe'
            });
        
        expect(response.status).toBe(200);
        expect(response.body.Name).toBe('Jane Doe');
    });

    test('should delete a user', async () => {
        const response = await request(app).delete(`/users/${userId}`);
        expect(response.status).toBe(200);
        // Additional check: Try fetching the user, should return 404 or relevant error
        const fetchResponse = await request(app).get(`/users/${userId}`);
        expect(fetchResponse.status).toBe(404);
    });
});
