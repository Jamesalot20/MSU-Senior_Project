const Response = require('./responseModel');

test('should be truthy for a valid response', () => {
    const response = new Response({
        UserFormID: '60d3b41f8baf7c35f042f3d8',  // Sample ObjectId (use a valid one)
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
