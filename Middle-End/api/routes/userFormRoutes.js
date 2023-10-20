const express = require('express');
const router = express.Router();
const UserForm = require('../../../Back-End/database/models/userFormModel');

// CREATE (e.g., Create a new form for a user)
router.post('/user-form', async (req, res) => {
    try {
        const userForm = new UserForm(req.body);
        await userForm.save();
        res.status(201).send(userForm);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ (all forms for all users) - Be cautious in production to not expose sensitive forms/data.
router.get('/user-forms', async (req, res) => {
    try {
        const userForms = await UserForm.find({});
        res.status(200).send(userForms);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ (single form by ID)
router.get('/user-form/:id', async (req, res) => {
    try {
        const userForm = await UserForm.findById(req.params.id);
        if (!userForm) {
            return res.status(404).send();
        }
        res.status(200).send(userForm);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE (e.g., Edit an existing form)
router.patch('/user-form/:id', async (req, res) => {
    try {
        const userForm = await UserForm.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!userForm) {
            return res.status(404).send();
        }
        res.status(200).send(userForm);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE (e.g., Delete a form)
router.delete('/user-form/:id', async (req, res) => {
    try {
        const userForm = await UserForm.findByIdAndDelete(req.params.id);
        if (!userForm) {
            return res.status(404).send();
        }
        res.status(200).send(userForm);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
