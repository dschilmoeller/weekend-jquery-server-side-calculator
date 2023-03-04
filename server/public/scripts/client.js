$(document).ready(onReady);

// variable of object to be POSTed.
let currentCalculation = {
    // static for testing
    numberOne: '1',
    numberTwo: '2',
    operator: '+'
}

// listeners
function onReady() {
    $('#plusSign').on('click', plusSignClick);
    $('#minusSign').on('click', minusSignClick);
    $('#multiplySign').on('click', multiplySignClick);
    $('#divideSign').on('click', divideSignClick);
    $('#submitButton').on('click', submitButtonClick);
    $('#clearButton').on('click', clearButtonClick);
}

function plusSignClick() {
    // console.log('plus sign clicked');
}

function minusSignClick() {
    // console.log('minus sign clicked');
}

function multiplySignClick() {
    // console.log('multiply sign clicked');
}

function divideSignClick() {
    // console.log('divide sign clicked');
}

function submitButtonClick() {
    // console.log('submit button clicked');
    submitCalcPost();
    clearInputs();
}

function clearButtonClick() {
    // console.log('clear button clicked');
    clearInputs()
}

function clearInputs() {
    $('#numberOneInput').val('');
    $('#numberTwoInput').val('');
}

function render(variable) {
    console.log('rendering!', variable)
    $.ajax({
        method: 'GET',
        url: '/retrieveArray'
    }).then(function(response) {
        console.log('AJAX retrieveArray Get Success!', response);
    }).catch(function() {
        alert('Request Failed. Try again later.')
    });
}


function submitCalcPost() {
    console.log('in submitCalcPost')
    $.ajax({
        method: 'POST',
        url: '/',
        data: currentCalculation
    }).then(function(response) {
        console.log('Submit Calc POST request success; calculating on server side')
        render()
    }).catch(function() {
        alert('submitCalc POST request failed. Try again later.')
    })
}

// *client* create an objectwith num1, num2, and operator
// *server* for loop to evaluate, with if/else logic dependent on operator in the object passed.

// discuss with Paige.
// External libraries and eval() are verboten.
// Other option is some kind of string parsing, I think.

// stretch goal: render using an i++ loop, use that to generate IDs, use that for re-running old calcs.