$(document).ready(onReady);

// variable of object to be POSTed.
let currentCalculation = {
    // static for testing
    numberOne: '',
    numberTwo: '',
    operator: ''
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
    currentCalculation.operator = '+'
}

function minusSignClick() {
    // console.log('minus sign clicked');
    currentCalculation.operator = '-'
}

function multiplySignClick() {
    // console.log('multiply sign clicked');
    currentCalculation.operator = '*'
}

function divideSignClick() {
    // console.log('divide sign clicked');
    currentCalculation.operator = '/'
}

function submitButtonClick() {
    // console.log('submit button clicked');
    // variables to take in values
    let num1 = $('#numberOneInput').val()
    let num2 = $('#numberTwoInput').val()
    let operatorClicked = currentCalculation.operator

    // if to see if an operator has been selected
    if (operatorClicked) {
        
        // if to check if numbers are entered into both fields
        if (num1 && num2) {

        // if numbers present, enter into current object
        currentCalculation.numberOne = num1
        currentCalculation.numberTwo = num2
        
        submitCalcPost(currentCalculation);
        clearInputs();
        
        } else {
            alert('Please enter a number into both fields.')
        }
    } else {
        alert('Please select an operator.')
    }
}


function clearButtonClick() {
    // console.log('clear button clicked');
    clearInputs()
}

function clearInputs() {
    $('#numberOneInput').val('');
    $('#numberTwoInput').val('');
}

function render() {
    console.log('rendering!')
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