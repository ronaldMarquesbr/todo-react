const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/new', taskController.newTask);

module.exports = router;