const User = require('./userModel');

test('should be truthy for valid user', () => {
    const user = new User({
        Name: 'testUser',
        Email: 'test@email.com',
        Password: 'testPass123'
    });

    expect(user.Name).toBe('testUser');
});
test('should be falsy for an invalid user without email', () => {
    const user = new User({
        Name: 'Test Name',
        Password: 'testPass'
    });

    // Try saving and expect a validation error
    user.save(err => {
        expect(err).toBeTruthy();
        expect(err.errors['Email']).toBeDefined();
    });
});

test('should be falsy for an invalid user without password', () => {
    const user = new User({
        Name: 'Test Name',
        Email: 'test@email.com'
    });

    // Try saving and expect a validation error
    user.save(err => {
        expect(err).toBeTruthy();
        expect(err.errors['Password']).toBeDefined();
    });
});
