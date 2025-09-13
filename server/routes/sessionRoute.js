const express = require('express');
const Session = require('../models/Session');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const newSession = new Session(req.body);
        await newSession.save();
        res.status(201).json({ message: "Session Added Successfully", session: newSession });
    } catch (err) {
        res.status(500).json({ message: "Error adding session", error: err.message });
    }
});

//  Get all sessions
router.get('/', async (req, res) => {
    try {
        const result = await Session.find();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error fetching sessions", error: err.message });
    }
});

//  Delete a session
router.delete('/:id', async (req, res) => {
    try {
        const result = await Session.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Session not found" });
        }
        res.json({ message: "Session Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting session", error: err.message });
    }
});

// Update a session
router.put('/:id', async (req, res) => {
    try {
        const result = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ message: "Session not found" });
        }
        res.json({ message: "Session Updated Successfully", session: result });
    } catch (err) {
        res.status(500).json({ message: "Error updating session", error: err.message });
    }
});

module.exports = router;
