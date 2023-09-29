const express = require('express');
const router = express.Router();
const Response = require('../database/models/responseModel');

// CREATE (e.g., Submit a form response)
router.post('/response', async (req, res) => {
    try {
        const response = new Response(req.body);
        await response.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ (all responses) - Be cautious in production. Restrict or filter to prevent exposure of sensitive data.
router.get('/responses', async (req, res) => {
    try {
        const responses = await Response.find({});
        res.status(200).send(responses);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ (single response by ID)
router.get('/response/:id', async (req, res) => {
    try {
        const response = await Response.findById(req.params.id);
        if (!response) {
            return res.status(404).send();
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE (e.g., Edit an existing response) - This might be restricted in many use-cases.
router.patch('/response/:id', async (req, res) => {
    try {
        const response = await Response.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!response) {
            return res.status(404).send();
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE (e.g., Delete a response)
router.delete('/response/:id', async (req, res) => {
    try {
        const response = await Response.findByIdAndDelete(req.params.id);
        if (!response) {
            return res.status(404).send();
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
