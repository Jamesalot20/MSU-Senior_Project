const mongoose = require('mongoose');

const formTemplateSchema = new mongoose.Schema({
    TemplateName: {
        type: String,
        required: true
    },
    TemplateStructure: {
        type: Object,  // Consider using mixed types if your structure is very dynamic
        required: true
    },
    CreationDate: {
        type: Date,
        default: Date.now
    }
});

const FormTemplate = mongoose.model('FormTemplate', formTemplateSchema);

module.exports = FormTemplate;
