const data = require('./data.js');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/list', (req, res) => {
    const chunk = data.slice(req.query.start, req.query.end);
    return res.send(chunk); 
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server listening on port '+port+'!');
});