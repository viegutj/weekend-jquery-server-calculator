// import 'express' dependency, save as variable express
const express = require('express');

// import dependency 'body-parser', save as 'bodyParser'
    // parses data from Post request (req.body) data
const bodyParser = require('body-parser');

// assign variable 'app' to express(initializing express)
    // creates server for us to use (server = the variable app)
const app = express();

// create listening port number (like a phone number) to access server
const port = 5000;

//pass everything in this route to the client
app.use(express.static('server/public'));

// enable bodyParser
app.use(bodyParser.urlencoded({extended:true}))

// Get route
app.get('/calculate', (req, res) => {
    console.log('in server-side app.get!');
    // send data back to client.js
})

// Post route
app.post('/calculate', (req,res) => {
    console.log('in serverside app.post!');
})


// Start the server
app.listen(port, () => {
    console.log('listening on port', port);
})