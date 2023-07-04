const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// For returning HTML files
const templatesPath = path.join(__dirname, 'templates');

// Define routes
app.get('/', (req, res) => {
  const filePath = path.join(templatesPath, 'index.html');
  res.sendFile(filePath);
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

const port = 3000;
https.createServer(options, app).listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});

// Placeholder route to keep the server running
app.get('/keepalive', (req, res) => {
  res.send('Server is running');
});
