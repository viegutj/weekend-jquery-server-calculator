console.log('hello js');

$(document).ready(onReady)

function onReady() {
    console.log('hey jQuery');
    // Write Event Listeners Here
    $('#addition-button').on('click', additionButtonHandler)
    $('#subtraction-button').on('click', subtractionButtonHandler)
    $('#multiplication-button').on('click', multiplicationButtonHandler)
    $('#division-button').on('click', divisionButtonHandler)
    $('#submit-button').on('click', submitButtonHandler)
    $('#clear-button').on('click', clearButtonHandler)
}

// Write Event Handlers Here
function additionButtonHandler(event){
    event.preventDefault()
    console.log('addition button clicked!');
}

function subtractionButtonHandler(event){
    event.preventDefault()
    console.log('subtraction button clicked!');
}

function multiplicationButtonHandler(event){
    event.preventDefault()
    console.log('multiplication button clicked!');
}

function divisionButtonHandler(event){
    event.preventDefault()
    console.log('division button clicked!');
}

function submitButtonHandler(event){
    event.preventDefault()
    console.log('submit button clicked!');
}

function clearButtonHandler(event){
    event.preventDefault()
    console.log('clear button clicked!');
}