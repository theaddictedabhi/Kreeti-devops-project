'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Abhimanyu mera nam');
});
app.get('/home', (req, res) => {
  res.send('home is working!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);