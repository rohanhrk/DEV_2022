const express = require("express");
const app = express();

app.listen('5000', function(){
    console.log('server listening on port 5000');
});

// The express.json() function is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads and is based on body-parser. 
app.use(express.json());

let user = {};

// GET method => used to recieving data from server
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/user', (req, res) => {
    res.json(user);
});

// POST method => user(client) sending data to server during request  
app.post('/user', (req, res) => {
    user = req.body;
    res.send('data has been added succesfully');
});

// PATCH method => used to update data
app.patch('/user', (req, res) => {
    let obj = req.body;
    for(let key in obj) {
        user[key] = obj[key];
    };
    res.json(user);
});

// DELETE method
app.delete('/user', (req, res) => {
    user = {};
    res.json(user);
});