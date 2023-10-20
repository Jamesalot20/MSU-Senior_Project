const express = require('express');
const router = express.Router();
const User = require('../../../Back-End/database/models/userModel');

// CREATE (e.g., Registration)
router.post('/user', async (req, res) => {
    try {
        const user = new User(req.body);
        // TODO: Ensure you hash the password before saving!
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ (all users) - Use with caution in production, could expose sensitive data
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ (single user)
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE (e.g., Change user details)
router.patch('/user/:id', async (req, res) => {
    try {
        // If updating password, ensure you re-hash it!
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE (e.g., Delete account)
router.delete('/user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
