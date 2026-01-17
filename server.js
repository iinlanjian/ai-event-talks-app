const express = require('express');
const path = require('path');
const talks = require('./data.js');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API endpoint to get the talk schedule
app.get('/api/talks', (req, res) => {
  res.json(talks);
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
