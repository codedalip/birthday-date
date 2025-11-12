import mongoose from "mongoose";


const birthdaySchema = new mongoose.Schema({
name: { type: String, required: true },
date: { type: Date, required: true },
notes: { type: String },
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Birthday", birthdaySchema);