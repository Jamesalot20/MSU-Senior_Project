const Response = require('./responseModel');
const mongoose = require('mongoose');

test('should be truthy for a valid response', () => {
    const response = new Response({
        UserFormID: '60d3b41f8baf7c35f042f3d8',
        SubmissionData: {
            question1: 'Answer for question 1',
            question2: 'Answer for question 2'
        }
    });

    expect(response.UserFormID.toString()).toBe('60d3b41f8baf7c35f042f3d8');
    expect(response.SubmissionData).toEqual({
        question1: 'Answer for question 1',
        question2: 'Answer for question 2'
    });
});

test('should be falsy for an invalid UserFormID', async () => {
    const response = new Response({
        UserFormID: 'invalidId',
        SubmissionData: {
            question1: 'Answer',
            question2: 'Another Answer'
        }
    });

    try {
        await response.validate();
        expect(true).toBe(false); // This line should not be reached if validation throws an error
    } catch (err) {
        expect(err.errors['UserFormID']).toBeDefined();
    }
});

test('should be falsy for missing SubmissionData', async () => {
    const response = new Response({
        UserFormID: '60d3b41f8baf7c35f042f3d8'
    });

    try {
        await response.validate();
        expect(true).toBe(false); // This line should not be reached if validation throws an error
    } catch (err) {
        expect(err.errors['SubmissionData']).toBeDefined();
    }
});
