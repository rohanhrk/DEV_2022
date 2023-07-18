const express = require("express");
const app = express();

app.listen('5000', function(){
    console.log('server listening on port 5000');
});

let user = {};

// GET method => used to recieving data from server
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/user', (req, res) => {
    res.json(user);
});

// POST method => user(client) sending data to server during request  
app.get('/user', (req, res) => {
    user = req.body;
    res.send('data has been added succesfully');
});

// PATCH method => update data
app.path