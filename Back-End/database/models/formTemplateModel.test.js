const FormTemplate = require('./formTemplateModel');

test('should be truthy for a valid form template', () => {
    const formTemplate = new FormTemplate({
        TemplateName: 'Sample Form Template',
        TemplateStructure: {
            field1: 'Text Input',
            field2: 'Dropdown',
            field3: 'Checkbox'
        }
    });

    expect(formTemplate.TemplateName).toBe('Sample Form Template');
    expect(formTemplate.TemplateStructure).toEqual({
        field1: 'Text Input',
        field2: 'Dropdown',
        field3: 'Checkbox'
    });
});

test('should be falsy for missing TemplateName', async () => {
    const formTemplate = new FormTemplate({
        TemplateStructure: {
            field1: 'Text Area'
        }
    });

    try {
        await formTemplate.validate();
        expect(true).toBe(false); // This line should not be reached if validation throws an error
    } catch (err) {
        expect(err.errors['TemplateName']).toBeDefined();
    }
});

test('should be falsy for missing TemplateStructure', async () => {
    const formTemplate = new FormTemplate({
        TemplateName: 'Another Sample Form Template'
    });

    try {
        await formTemplate.validate();
        expect(true).toBe(false); // This line should not be reached if validation throws an error
    } catch (err) {
        expect(err.errors['TemplateStructure']).toBeDefined();
    }
});
