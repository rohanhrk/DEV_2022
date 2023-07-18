// require express
const express = require('express');

// creating server
const app = express();

// port 
let port = '8080';

// connection between user and server
app.listen(port, function() {
    console.log(`server is listening on port ${port}`);
});

// types of request -> get, post, put, delete
app.get('/', (req, res) => {
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    console.log('hello from home page');
    res.send('<h1> hello from backend </h1>');
});

let obj = {
    'name': 'Abhishek'
}
app.get('/user', (req, res) => {
    console.log('users');
    res.json(obj);
})

app.get('/home', (req, res) => {
    console.log(__dirname);
    res.sendFile('./views/index.html', {root : __dirname});
});