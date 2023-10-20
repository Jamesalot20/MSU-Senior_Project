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
