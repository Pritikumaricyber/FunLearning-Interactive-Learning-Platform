// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});