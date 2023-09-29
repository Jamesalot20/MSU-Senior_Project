const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    UserFormID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserForm',   // Referencing the UserForm model
        required: true
    },
    SubmissionData: {
        type: Object,  // This should match the structure you expect from form submissions
        required: true
    },
    SubmissionDate: {
        type: Date,
        default: Date.now
    }
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
