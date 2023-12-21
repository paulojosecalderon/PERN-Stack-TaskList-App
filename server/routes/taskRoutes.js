const express = require('express');
const router = express.Router();
const {postTask,getTasks, getTask, deleteTask, putTask} = require('../controller/taskController');

//Routes
router.route('/').post(postTask).get(getTasks);
router.route('/:id').get(getTask).delete(deleteTask).put(putTask);

module.exports = router;