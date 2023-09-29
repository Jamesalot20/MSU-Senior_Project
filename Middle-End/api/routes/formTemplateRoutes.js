const express = require('express');
const router = express.Router();
const FormTemplate = require('../database/models/formTemplateModel');

// CREATE
router.post('/form-template', async (req, res) => {
    try {
        const formTemplate = new FormTemplate(req.body);
        await formTemplate.save();
        res.status(201).send(formTemplate);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ (all templates)
router.get('/form-templates', async (req, res) => {
    try {
        const formTemplates = await FormTemplate.find({});
        res.status(200).send(formTemplates);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ (single template)
router.get('/form-template/:id', async (req, res) => {
    try {
        const formTemplate = await FormTemplate.findById(req.params.id);
        if (!formTemplate) {
            return res.status(404).send();
        }
        res.status(200).send(formTemplate);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE
router.patch('/form-template/:id', async (req, res) => {
    try {
        const formTemplate = await FormTemplate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!formTemplate) {
            return res.status(404).send();
        }
        res.status(200).send(formTemplate);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE
router.delete('/form-template/:id', async (req, res) => {
    try {
        const formTemplate = await FormTemplate.findByIdAndDelete(req.params.id);
        if (!formTemplate) {
            return res.status(404).send();
        }
        res.status(200).send(formTemplate);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
