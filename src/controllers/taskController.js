const Task = require("../models/taskModel");

const sortByDueDate = (req, res) => {
  Task.find({})
    .sort({ dueDate: 1 })
    .exec((err, tasks) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(tasks);
    });
};

const sortByPriority = (req, res) => {
  Task.find({})
    .sort({ priority: -1 })
    .exec((err, tasks) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(tasks);
    });
};

const sortByDateCreated = (req, res) => {
  Task.find({})
    .sort({ createdAt: -1 })
    .exec((err, tasks) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json(tasks);
    });
};
