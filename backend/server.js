require('dotenv').config();
const express = require('express');
const http = require('http');
const db = require('./db');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const { setIo } = require('./socket');
setIo(io);
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));

app.get('/', (req, res) => {
  res.send('Task Flow Backend');
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

module.exports = app;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});