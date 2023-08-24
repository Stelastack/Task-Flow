const express = require('express');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Task Flow Backend');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});