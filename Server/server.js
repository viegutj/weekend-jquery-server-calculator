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
    console.log('full calculatorHistory array is:', calculatorHistory);
    res.send(calculatorHistory);
})

// Post route
// ---- move logic to the app.post
app.post('/calculator', (req,res) => {
    console.log('in server-side app.post!');
    let currentObject = req.body

    // logic goes here
    // modify our data to new format NEW VARIABLE NAME
    // define current object
    // let currentObject = calculatorHistory[calculatorHistory.length-1];
    console.log('currentObject is:', currentObject);
    
    // Prevent error from undefined currentObject
    if (currentObject == undefined || currentObject == null || currentObject == ''){
        return ''
    }

    // Use split() method to seperate string elements 
    // into an array
    // reassign values based on that array
    if (currentObject.hasOwnProperty('input') == false) {
        return res.send(calculatorHistory);
    }
    // Used operator input with escape characters from YouTube example
    let currentObjectArray = currentObject.input.split(/\+|\*|\-|\//);
    console.log('currentObjectArray created by split():', currentObjectArray);
    
    // Use split array to assign two seperate inputs to evaluate
    currentObject = {
        inputOneProp: currentObjectArray[0],
        inputTwoProp: currentObjectArray[1],
        operator: currentObject.operator,
        result: ''
    }

    // define operator using if else
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

    // add object to array calculatorHistory
    calculatorHistory.push(currentObject)

    console.log('currentObject.result is:', currentObject.result);
    console.log('full calculatorHistory array is:', calculatorHistory);

    // push data to our array
    // calculatorHistory.push(req.body);
    res.sendStatus(201)
});

// Delete route
app.delete('/calculator', (req,res) =>{
    console.log('in server-side app.delete!');
    calculatorHistory = []
    console.log('calculatorHistory in app.delete:', calculatorHistory);
    res.sendStatus(204)
})


// Start the server
app.listen(port, () => {
    console.log('listening on port', port);
});