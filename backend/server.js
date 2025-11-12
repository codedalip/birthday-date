import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import birthdaysRouter from "./routes/birthdays.js";


dotenv.config();
dotenv.config({path:"./.env"}); 
const app = express();
app.use(cors());
app.use(express.json());


console.log("MONGU_URI", process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


if (!MONGO_URI) {
console.error("MONGO_URI not set. Create .env or set env var.");
process.exit(1);
}

mongoose
.connect(MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => {
console.error("Mongo connection error:", err.message);
process.exit(1);
});

app.use("/api/birthdays", birthdaysRouter);


app.get('/', (req, res) => res.send('Birthday API is running'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));