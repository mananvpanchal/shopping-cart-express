const data = require('./data.js');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/list', (req, res) => {
    if(data.length >= req.query.end) {
        const chunk = data.slice(req.query.start, req.query.end);
        return res.send(chunk); 
    } else {
        const chunk = [];
        for(let i = parseInt(req.query.start); i < parseInt(req.query.end); i++) {
            chunk.push({ id: ''+(i+1), company: 'Company '+(i+1), 
            product: 'Product '+(i+1), model :'Model '+(i+1), price: i+1, count: 10});
        }
        return res.send(chunk); 
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server listening on port '+port+'!');
});