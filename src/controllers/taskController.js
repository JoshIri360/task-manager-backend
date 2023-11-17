const Task = require("../models/taskModel");

class TaskController {
  createTask = (req, res) => {
    const task = new Task(req.body);
    task.save((err, task) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(task);
    });
  };

  getTasks(req, res) {
    const sortField = req.query.sort;
    const allowedFields = ["dueDate", "priority"];
    if (sortField && !allowedFields.includes(sortField)) {
      return res.status(400).json({ message: "Invalid sort field" });
    }

    Task.find({})
      .sort({ [sortField]: -1 })
      .exec((err, tasks) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(tasks);
      });
  }

  getTask = (req, res) => {
    Task.findById(req.params.id, (err, task) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(task);
    });
  };

  updateTask = (req, res) => {
    const { id } = req.params;
    const task = req.body;

    return Task.findByIdAndUpdate(id, task, { new: true }, (err, task) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(task);
    });
  };

  deleteTask = (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id, (err, task) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json({ message: "Task deleted" });
    });
  };

  completeTask = (req, res) => {
    const { id } = req.params;
    Task.findById(id, (err, task) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      if (task.completed) {
        return res.status(400).json({ message: "Task already completed" });
      }
      task.completed = true;
      task.save((err, updatedTask) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(updatedTask);
      });
    });
  };

  unCompleteTask = (req, res) => {
    const { id } = req.params;
    Task.findById(id, (err, task) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      if (!task.completed) {
        return res.status(400).json({ message: "Task already uncompleted" });
      }
      task.completed = false;
      task.save((err, updatedTask) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(updatedTask);
      });
    });
  };

  getCompletedTasks = (req, res) => {
    Task.find({ completed: true }, (err, tasks) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(tasks);
    });
  };

  getUnCompletedTasks = (req, res) => {
    Task.find({ completed: false }, (err, tasks) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(tasks);
    });
  };
}

module.exports = TaskController;
