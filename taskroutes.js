const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  completeTask
} = require('../controllers/taskController');

router.use(authMiddleware);
router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.put('/complete/:id', completeTask);

module.exports = router;
