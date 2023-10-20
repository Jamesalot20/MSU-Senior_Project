const User = require('./userModel');

test('should be truthy for valid user', () => {
    const user = new User({
        username: 'testUser',
        email: 'test@email.com',
        password: 'testPass123'
    });

    expect(user.username).toBe('testUser');
});
