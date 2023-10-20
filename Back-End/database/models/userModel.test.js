const User = require('./userModel');

test('should be truthy for valid user', () => {
    const user = new User({
        Name: 'testUser',
        Email: 'test@email.com',
        Password: 'testPass123'
    });

    expect(user.Name).toBe('testUser');
});
