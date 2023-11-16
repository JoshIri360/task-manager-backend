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

  getTasks = (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(tasks);
    });
  };

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
      return res.status(200).json(task);
    });
  };

  completeTask = (req, res) => {
    const { id } = req.params;
    Task.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true },
      (err, task) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(task);
      }
    );
  };

  unCompleteTask = (req, res) => {
    const { id } = req.params;
    Task.findByIdAndUpdate(
      id,
      { completed: false },
      { new: true },
      (err, task) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(task);
      }
    );
  };

  sortByDueDate = (req, res) => {
    Task.find({})
      .sort({ dueDate: 1 })
      .exec((err, tasks) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(tasks);
      });
  };

  sortByPriority = (req, res) => {
    Task.find({})
      .sort({ priority: -1 })
      .exec((err, tasks) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(tasks);
      });
  };

  sortByDateCreated = (req, res) => {
    Task.find({})
      .sort({ createdAt: -1 })
      .exec((err, tasks) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(tasks);
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
