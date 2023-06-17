console.log('hello js');

$(document).ready(onReady)

//Store inputs as values
let inputOne;
let inputTwo;
let operator;

// inputOne = $('#input-one').val();
// inputTwo = $('#input-two').val();

function onReady() {
    console.log('hey jQuery');
    // Write Event Listeners Here
    $('#addition-button').on('click', additionButtonHandler)
    $('#subtraction-button').on('click', subtractionButtonHandler)
    $('#multiplication-button').on('click', multiplicationButtonHandler)
    $('#division-button').on('click', divisionButtonHandler)
    $('#submit-button').on('click', submitButtonHandler)
    $('#clear-button').on('click', clearButtonHandler)

    getHistory();
}

function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function(response){
        console.log('In client side getHistory!');
        render(response);
    }).catch(function(error){
        alert('Request Failed!!');
        console.log('Error from server in GET', error);
    })
}

function postCalculatorData(){
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            inputOneProp: inputOne,
            operator: operator,
            inputTwoProp: inputTwo
        }
    }).then(function(response){
    console.log('In server-side postCalculatorData!');
    // Call our getHistory()
    getHistory();
    }).catch(function(error){
        alert('Something went wrong in POST', error)
    })
}


// Write Event Handlers Here
function additionButtonHandler(event){
    event.preventDefault()
    console.log('addition button clicked!');
    operator = 'addition';
}

function subtractionButtonHandler(event){
    event.preventDefault()
    console.log('subtraction button clicked!');
    operator = 'subtraction';
}

function multiplicationButtonHandler(event){
    event.preventDefault()
    console.log('multiplication button clicked!');
    operator = 'multiplication';
}

function divisionButtonHandler(event){
    event.preventDefault()
    console.log('division button clicked!');
    operator = 'division';
}

function submitButtonHandler(event){
    event.preventDefault()
    console.log('submit button clicked!');
    // grab input one and two as local variables
    inputOne = $('#input-one').val();
    console.log('This is inputOne!', inputOne);
    inputTwo = $('#input-two').val();   
    console.log('This is inputTwo!', inputTwo);
    postCalculatorData();
}

function clearButtonHandler(event){
    event.preventDefault()
    console.log('clear button clicked!');
    inputOne = $('#input-one').val('');
    console.log('This is inputOne!', inputOne);
    inputTwo = $('#input-two').val('');   
    console.log('This is inputTwo!', inputTwo);
}

function render(response) {
    console.log('Render function, the response is:', response);
    $('#result').append(response)
}