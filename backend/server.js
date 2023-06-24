require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./connectDB");
const { Task } = require("./taskModel");
const taskController = require("./taskController");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/api/task", taskController.getAllTask);

app.post("/api/task", taskController.addTask);

app.delete("/api/task/:id", taskController.deleteTask);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
