const UserForm = require('./userFormModel');
const mongoose = require('mongoose');

test('should be truthy for valid user form', () => {
    const userForm = new UserForm({
        UserID: '60d3b41f8baf7c35f042f3d8',
        TemplateID: '60d3b41f8baf7c35f042f3d9',
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

test('should be falsy for an invalid UserID or TemplateID', async () => {
    const userForm = new UserForm({
        UserID: 'invalidId',
        TemplateID: '60d3b41f8baf7c35f042f3d9',
        FormName: 'Registration Form',
        FormStructure: {
            field1: 'Text Input',
            field2: 'Dropdown'
        }
    });

    try {
        await userForm.validate();  
        expect(true).toBe(false);
    } catch (err) {
        expect(err.errors['UserID']).toBeDefined();
    }
});

test('should be falsy for missing FormName', async () => {
    const userForm = new UserForm({
        UserID: '60d3b41f8baf7c35f042f3d8',
        TemplateID: '60d3b41f8baf7c35f042f3d9',
        FormStructure: {
            field1: 'Text Input',
            field2: 'Dropdown'
        }
    });

    try {
        await userForm.validate();
        expect(true).toBe(false);
    } catch (err) {
        expect(err.errors['FormName']).toBeDefined();
    }
});

test('should be falsy for missing FormStructure', async () => {
    const userForm = new UserForm({
        UserID: '60d3b41f8baf7c35f042f3d8',
        TemplateID: '60d3b41f8baf7c35f042f3d9',
        FormName: 'Registration Form'
    });

    try {
        await userForm.validate();
        expect(true).toBe(false);
    } catch (err) {
        expect(err.errors['FormStructure']).toBeDefined();
    }
});
