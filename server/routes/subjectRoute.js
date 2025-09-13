const express = require('express');
const subject = require('../models/Subject');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const newsubject = new subject(req.body);
        await newsubject.save();
        res.status(201).json({ message: "subject Added Successfully", subject: newsubject });
    } catch (err) {
        res.status(500).json({ message: "Error adding subject", error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await subject.find();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error fetching subjects", error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const result = await subject.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "subject not found" });
        }
        res.json({ message: "subject Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting subject", error: err.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const result = await subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ message: "subject not found" });
        }
        res.json({ message: "subject Updated Successfully", subject: result });
    } catch (err) {
        res.status(500).json({ message: "Error updating subject", error: err.message });
    }
});

module.exports = router;
