const express = require("express");
const TaskController = require("../controllers/taskController");

const router = express.Router();
const taskController = new TaskController();

router
  .route("/tasks")
  .post((req, res) => taskController.createTask(req, res))
  .get((req, res) => taskController.getTasks(req, res));

router
  .route("/tasks/completed")
  .get((req, res) => taskController.getCompletedTasks(req, res));

router
  .route("/tasks/:id")
  .get((req, res) => taskController.getTask(req, res))
  .put((req, res) => taskController.updateTask(req, res))
  .delete((req, res) => taskController.deleteTask(req, res));

router
  .route("/tasks/:id/complete")
  .put((req, res) => taskController.completeTask(req, res));

router
  .route("/tasks/:id/uncomplete")
  .put((req, res) => taskController.unCompleteTask(req, res))
  .get((req, res) => taskController.getUnCompletedTasks(req, res));

module.exports = router;
