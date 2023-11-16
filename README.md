# Task Management System

This is a RESTful API for a Task Management System developed using MongoDB, Express, and Node.js. It includes functionalities for CRUD operations (Create, Read, Update, Delete) for tasks, as well as setting task priorities and due dates.

## Installation

1. Clone the repository
2. Install the dependencies using `npm install`
3. Create a `.env` file in the root directory of the project and add the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: The port number for the application
4. Run the application using `npm start`

## API Endpoints

- `POST /tasks`: Create a new task
  - Request body should include `title`, `description`, `priority`, and `dueDate`
- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a task by id
- `PUT /tasks/:id`: Update a task by id
  - Request body can include `title`, `description`, `priority`, and `dueDate`
- `DELETE /tasks/:id`: Delete a task by id

## Models

### Task

- `title`: String, required
- `description`: String, required
- `priority`: Number, required
- `dueDate`: Date, required

## Controllers

### TaskController

- `createTask(req, res)`: Create a new task
- `getTasks(req, res)`: Get all tasks
- `getTask(req, res)`: Get a task by id
- `updateTask(req, res)`: Update a task by id
- `deleteTask(req, res)`: Delete a task by id

## Routes

- `setTaskRoutes(app)`: Sets up the routes for tasks

## Scripts

- `start`: Starts the application
- `test`: Runs the tests

## Dependencies

- `express`: Web application framework
- `mongoose`: MongoDB object modeling tool
- `dotenv`: Loads environment variables from a `.env` file

## Dev Dependencies

- `nodemon`: Automatically restarts the application when file changes are detected
- `jest`: Testing framework
- `supertest`: HTTP assertions library for testing API endpoints