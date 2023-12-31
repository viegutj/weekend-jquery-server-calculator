// Log to confirm that js is linked to html
console.log('hello js');

//import jQuery
$(document).ready(onReady)

//declare global variables
let inputValue;
let operator;
let myBigArray;

// create our jQuery onReady() function for user events and to retrieve history
function onReady() {
    console.log('hey jQuery');
    // Write Event Listeners Here
    $('#addition-button').on('click', additionButtonHandler)
    $('#subtraction-button').on('click', subtractionButtonHandler)
    $('#multiplication-button').on('click', multiplicationButtonHandler)
    $('#division-button').on('click', divisionButtonHandler)
    $('#submit-button').on('click', submitButtonHandler)
    $('#clear-button').on('click', clearButtonHandler)
    $('#zero-button').on('click', zeroButtonHandler)
    $('#one-button').on('click', oneButtonHandler)
    $('#two-button').on('click', twoButtonHandler)
    $('#three-button').on('click', threeButtonHandler)
    $('#four-button').on('click', fourButtonHandler)
    $('#five-button').on('click', fiveButtonHandler)
    $('#six-button').on('click', sixButtonHandler)
    $('#seven-button').on('click', sevenButtonHandler)
    $('#eight-button').on('click', eightButtonHandler)
    $('#nine-button').on('click', nineButtonHandler)
    $('#decimal-button').on('click', decimalButtonHandler)
    $('#delete-button').on('click', deleteButtonHandler)
    $('#history-list').on('click', '.new-string', runPreviousSubmit)

    // retrieve history of server
    getHistory();
}

// Not displaying inputTwoProp correctly, returning result 'null'
// Ask Emma about possible solutions
function runPreviousSubmit(event) {
    event.preventDefault();
    console.log('in function runPreviousSubmit()!!');

    let index = $(this).data('index');
    console.log('index is:', index);
    myBigArray.index
    console.log('myBigArray[index] is:', myBigArray[index]);
        $.ajax({
            method:'POST',
            url:'/calculator',
            data: {
                input: `${myBigArray[index].inputOneProp} ${myBigArray[index].operator} ${myBigArray[index].inputTwoProp}`,
                operator: myBigArray[index].operator,
                result: ''
            }
        }).then(function(response){
    console.log('In client-side postCalculatorData!');
    // Call our getHistory()
    getHistory();
    }).catch(function(error){
    alert('Something went wrong in POST', error)
    })}


// create GET function
// logging an error on refresh. Split() method from stretch goal is
// causing the errors. Not sure how to resolve.
function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function(response){
        console.log('In client side getHistory!');
        console.log('GET response is:', response);
        myBigArray = response;
        render(response);
    }).catch(function(error){
        alert('Request Failed!!');
        console.log('Error from server in GET', error);
    })
}

// POST function
function postCalculatorData(){
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            input: inputValue,
            operator: operator,
            result: ''
        }
    }).then(function(response){
    console.log('In client-side postCalculatorData!');
    // Call our getHistory()
    getHistory();
    }).catch(function(error){
        alert('Something went wrong in POST', error)
    })
}

// DELETE function
function deleteHistory() {
    $.ajax({
        method: 'DELETE',
        url: '/calculator',
    }).then(function(response){
        console.log('In client-side deleteHistory!');
    }).catch(function(error){
        alert('Something went wrong in DELETE', error)
    })
}


// Write Event Handlers Here
function additionButtonHandler(event){
    event.preventDefault()
    console.log('addition button clicked!');
    operator = '+';
    $('#input').val(($('#input').val()) + '+');
}

function subtractionButtonHandler(event){
    event.preventDefault()
    console.log('subtraction button clicked!');
    operator = '-';
    $('#input').val(($('#input').val()) + '-');
}

function multiplicationButtonHandler(event){
    event.preventDefault()
    console.log('multiplication button clicked!');
    operator = '*';
    $('#input').val(($('#input').val()) + '*');
}

function divisionButtonHandler(event){
    event.preventDefault()
    console.log('division button clicked!');
    operator = '/';
    $('#input').val(($('#input').val()) + '/');
}

function submitButtonHandler(event){
    event.preventDefault()
    console.log('submit button clicked!');

    //Grab input as variable
    inputValue = $('#input').val()
    
    // Prevent empty inputValue submission
    if(inputValue == null || inputValue == undefined || inputValue == ''){
        return alert('Please enter a valid input!')
    }
    if(operator == null || operator == undefined || operator == ''){
        return alert('Please enter a valid input!')
    }
    console.log('inputValue is:', inputValue);
    // call POST function
    postCalculatorData();
}

function clearButtonHandler(event){
    event.preventDefault()
    console.log('clear button clicked!');
    console.log('This is input before clear!', $('#input').val())
    inputOne = $('#input').val('');
    console.log('This is input after clear!', $('#input').val())
}

//Stretch Goal Buttons
function zeroButtonHandler(event){
    event.preventDefault();
    console.log('zero-button was clicked!');
    $('#input').val(($('#input').val()) + '0');
}
function oneButtonHandler(event){
    event.preventDefault();
    console.log('one-button was clicked!');
    $('#input').val(($('#input').val()) + '1');
}
function twoButtonHandler(event){
    event.preventDefault();
    console.log('two-button was clicked!');
    $('#input').val(($('#input').val()) + '2');
}
function threeButtonHandler(event){
    event.preventDefault();
    console.log('three-button was clicked!');
    $('#input').val(($('#input').val()) + '3');
}
function fourButtonHandler(event){
    event.preventDefault();
    console.log('four-button was clicked!');
    $('#input').val(($('#input').val()) + '4');
}
function fiveButtonHandler(event){
    event.preventDefault();
    console.log('five-button was clicked!');
    $('#input').val(($('#input').val()) + '5');
}
function sixButtonHandler(event){
    event.preventDefault();
    console.log('six-button was clicked!');
    $('#input').val(($('#input').val()) + '6');
}
function sevenButtonHandler(event){
    event.preventDefault();
    console.log('seven-button was clicked!');
    $('#input').val(($('#input').val()) + '7');
}
function eightButtonHandler(event){
    event.preventDefault();
    console.log('eight-button was clicked!');
    $('#input').val(($('#input').val()) + '8');
}
function nineButtonHandler(event){
    event.preventDefault();
    console.log('nine-button was clicked!');
    $('#input').val(($('#input').val()) + '9');
}
function decimalButtonHandler(event){
    event.preventDefault();
    console.log('decimal-button was clicked!');
    $('#input').val(($('#input').val()) + '.');
}
function deleteButtonHandler(event) {
    event.preventDefault();
    console.log('DELETE History button was clicked');
    // DELETE method function called here
    $('#history-list').empty();
    deleteHistory();
}

// Render function
function render(response) {
    console.log('Render function, the response is:', response);
    if (response.length === 0) {
        return
    }
    appendHistory(response);
    $('#result').empty()
    $('#result').append('<p>' + response[response.length-1].result + '</p>')
}

// Callback function for render
function appendHistory(response) {
    // test that we're recieving responses and are in appendHistory
    console.log('In appendHistory, response:', response);
    // clear div
    $('#history-list').empty();
    // create a loop that goes through response and prints ALL responses
    for (let index = 0; index < response.length; index++) {
        const item = response[index];
        responseInputOne = item.inputOneProp
        responseInputTwo = item.inputTwoProp
        responseOperator = item.operator
        responseResult = item.result
        responseHistoryString = `${responseInputOne} ${responseOperator} ${responseInputTwo} = ${responseResult}`
        $('#history-list').append(`<li class="new-string" data-index=${index}>${responseInputOne} ${responseOperator} ${responseInputTwo} = ${responseResult}</li>`)
    };
    }