const express = require('express');

const app = express();n

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' }); 
 });

module.exports = app;