const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    priority: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

TaskSchema.pre("save", function (next) {
  const task = this;
  // Check the validity of the task
  const isValidTask =
    typeof task.title === "string" &&
    typeof task.description === "string" &&
    typeof task.priority === "number" &&
    task.priority >= 1 &&
    task.priority <= 3 &&
    task.dueDate instanceof Date &&
    typeof task.completed === "boolean";

  if (!isValidTask) {
    // If the task is not valid, pass an error to the next middleware
    next(new Error("Invalid task"));
  } else {
    // If the task is valid, proceed to the next middleware
    next();
  }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
