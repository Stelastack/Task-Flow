const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /tasks
router.get('/', (req, res) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET /tasks/assigned/:userId
router.get('/assigned/:userId', (req, res) => {
  db.all('SELECT * FROM tasks WHERE assigned_to = ?', [req.params.userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST /tasks
router.post('/', (req, res) => {
  const { title, description, status, assigned_to } = req.body;
  db.run('INSERT INTO tasks (title, description, status, assigned_to) VALUES (?, ?, ?, ?)', [title, description, status, assigned_to], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  const { title, description, status, assigned_to } = req.body;
  db.run('UPDATE tasks SET title = ?, description = ?, status = ?, assigned_to = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [title, description, status, assigned_to, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task updated' });
  });
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  db.run('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task deleted' });
  });
});

module.exports = router;