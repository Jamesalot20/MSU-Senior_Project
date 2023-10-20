const UserForm = require('./userFormModel');

test('should be truthy for valid user form', () => {
    const userForm = new UserForm({
        UserID: '60d3b41f8baf7c35f042f3d8',  // Sample ObjectId (use a valid one)
        TemplateID: '60d3b41f8baf7c35f042f3d9',  // Sample ObjectId (use a valid one)
        FormName: 'Registration Form',
        FormStructure: {
            field1: 'Text Input',
            field2: 'Dropdown'
        }
    });

    expect(userForm.UserID.toString()).toBe('60d3b41f8baf7c35f042f3d8');
    expect(userForm.TemplateID.toString()).toBe('60d3b41f8baf7c35f042f3d9');
    expect(userForm.FormName).toBe('Registration Form');
    expect(userForm.FormStructure).toEqual({
        field1: 'Text Input',
        field2: 'Dropdown'
    });
});
