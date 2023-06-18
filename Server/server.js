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

// Store our data
let calculatorHistory = []

// Get route
app.get('/calculator', (req, res) => {
    console.log('in server-side app.get!');
    // send data back to client.js
    // define current object
    let currentObject = calculatorHistory[calculatorHistory.length-1];
    console.log('currentObject is:', currentObject);
    // define operator using if else
    if (currentObject === undefined){
        return ''
    }
    if (currentObject.operator == '+') {
        currentObject.result = Number(currentObject.inputOneProp) + Number(currentObject.inputTwoProp);
        console.log('currentObject is:', currentObject);
    } else if (currentObject.operator === '-'){
        currentObject.result = Number(currentObject.inputOneProp) - Number(currentObject.inputTwoProp);
        console.log('currentObject is:', currentObject);
    } else if (currentObject.operator === '*'){
        currentObject.result = Number(currentObject.inputOneProp) * Number(currentObject.inputTwoProp);
        console.log('currentObject is:', currentObject);
    } else if (currentObject.operator === '/'){
        currentObject.result = Number(currentObject.inputOneProp) / Number(currentObject.inputTwoProp);
        console.log('currentObject is:', currentObject);
    } else{
        console.log("I am not in the if")
        console.log('no input for operator');
    }
    console.log('currentObject.result is:', currentObject.result);
    console.log('full calculatorHistory array is:', calculatorHistory);
    res.send(calculatorHistory);
})

// Post route
app.post('/calculator', (req,res) => {
    console.log('in server-side app.post!');
    // req.body = currentObject
    calculatorHistory.push(req.body);
    res.sendStatus(201)
});


// Start the server
app.listen(port, () => {
    console.log('listening on port', port);
});