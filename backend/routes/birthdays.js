import express from "express";
import Birthday from "../models/Birthday.js";


const router = express.Router();


// GET all
router.get("/", async (req, res) => {
try {
const items = await Birthday.find().sort({ date: 1 });
res.json(items);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// POST create
router.post("/", async (req, res) => {
try {
const { name, date, notes } = req.body;
const item = new Birthday({ name, date, notes });
await item.save();
res.status(201).json(item);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// DELETE
router.delete('/:id', async (req, res) => {
try {
const { id } = req.params;
await Birthday.findByIdAndDelete(id);
res.json({ success: true });
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// PATCH (edit)
router.patch('/:id', async (req, res) => {
try {
const { id } = req.params;
const updates = req.body;
const updated = await Birthday.findByIdAndUpdate(id, updates, { new: true });
res.json(updated);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


export default router;