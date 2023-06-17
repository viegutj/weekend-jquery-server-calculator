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
        console.log('GET response is:', response);
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
            inputTwoProp: inputTwo,
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


// Write Event Handlers Here
function additionButtonHandler(event){
    event.preventDefault()
    console.log('addition button clicked!');
    operator = '+';
}

function subtractionButtonHandler(event){
    event.preventDefault()
    console.log('subtraction button clicked!');
    operator = '-';
}

function multiplicationButtonHandler(event){
    event.preventDefault()
    console.log('multiplication button clicked!');
    operator = '*';
}

function divisionButtonHandler(event){
    event.preventDefault()
    console.log('division button clicked!');
    operator = '/';
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
    appendHistory(response);
    $('#result').empty()
    $('#result').append('<p>' + response[response.length-1].result + '</p>')
}

function appendHistory(response) {
    console.log('In appendHistory, response:', response);
    // responseInputOne = response.inputOneProp
    // responseOperator = response.operator
    // responseInputTwo = response.inputTwoProp
    // responseResult = response.result
    // console.log(`${responseInputOne} ${responseOperator} ${responseInputTwo} = ${responseResult}`);
    // responseHistoryString = `${responseInputOne} ${responseOperator} ${responseInputTwo} = ${responseResult}`
    // console.log('responseHistoryString:', responseHistoryString);
    // $('#new-string').val('')
    // for (item of response) {
        responseInputOne = response[response.length-1].inputOneProp
        responseOperator = response[response.length-1].operator
        responseInputTwo = response[response.length-1].inputTwoProp
        responseResult = response[response.length-1].result
        console.log(`${responseInputOne} ${responseOperator} ${responseInputTwo} = ${responseResult}`);
        responseHistoryString = `${responseInputOne} ${responseOperator} ${responseInputTwo} = ${responseResult}`
        $('#history-list').append('<li class="new-string">' + responseHistoryString + '</li>')
    }