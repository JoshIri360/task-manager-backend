const express = require("express");
const TaskController = require("../controllers/taskController");

const router = express.Router();
const taskController = new TaskController();

router.post("/tasks", (req, res) => {
  taskController.createTask(req, res);
});

router.get("/tasks", (req, res) => {
  taskController.getTasks(req, res);
});

router.get("/tasks/completed", (req, res) => {
  taskController.getCompletedTasks(req, res);
});

router.get("/tasks/:id", (req, res) => {
  taskController.getTask(req, res);
});

router.put("/tasks/:id", (req, res) => {
  taskController.updateTask(req, res);
});

router.delete("/tasks/:id", (req, res) => {
  taskController.deleteTask(req, res);
});

router.put("/tasks/:id/complete", (req, res) => {
  taskController.completeTask(req, res);
});

router.put("/tasks/:id/uncomplete", (req, res) => {
  taskController.unCompleteTask(req, res);
});

router.get("/tasks/:id/uncomplete", (req, res) => {
  taskController.getUnCompletedTasks(req, res);
});

module.exports = router;
