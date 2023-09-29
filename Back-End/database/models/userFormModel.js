const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',   // Referencing the User model
        required: true
    },
    TemplateID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FormTemplate',  // Referencing the FormTemplate model
        required: true
    },
    FormName: {
        type: String,
        required: true
    },
    FormStructure: {
        type: Object,  // Consider using mixed types if your structure is very dynamic
        required: true
    },
    CreationDate: {
        type: Date,
        default: Date.now
    }
});

const UserForm = mongoose.model('UserForm', userFormSchema);

module.exports = UserForm;
