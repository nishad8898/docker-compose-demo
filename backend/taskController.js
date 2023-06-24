const { Task } = require("./taskModel");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ status: "success", data: tasks });
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
};

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(200).json({ status: "success", data: task });
  } catch (error) {
    return res.status(500).json({ status: "error", error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    return res.status(200).json({ status: "success", data: task });
  } catch (error) {
    return res.status(500).json({ status: "error", error });
  }
};

module.exports = { getAllTask, addTask, deleteTask };
