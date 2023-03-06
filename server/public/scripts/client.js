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
    getForRender();
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

function getForRender() {
    console.log('rendering!')
    $.ajax({
        method: 'GET',
        url: '/retrieveArray'
    }).then(function(response) {
        console.log('AJAX get Success!', response);
        render(response)
    }).catch(function() {
        alert('Request Failed. Try again later.')
    });
}

function getCurrentAnswer() {
    $.ajax({
        method: 'GET',
        url: '/retrieveCurrentAnswer'
    }).then(function(response) {
        $('#currentAnswerArea').html(`
        <table>
          <thead>
            <tr>
              <td>Current Computation</td>
              <td>Current Answer</td>
            </tr>
            <tr>
                <td>${currentCalculation.numberOne} ${currentCalculation.operator} ${currentCalculation.numberTwo}</td>
                <td>${response}</td>
          </thead>
        </table>
        `)
        clearInputs();
    })
}

function render(response) {
    getCurrentAnswer()
    $('#calcHistoryArea').empty()
    $('#calcHistoryArea').append(`
    <thead>
        <tr>
            <th>Previous Evaluations</th>
        </tr>
    </thead>
    <tbody>
    `)
    for (calculation of response) {
        $('#calcHistoryArea').append(`
        <tr>
            <td>${calculation.numberOne} ${calculation.operator} ${calculation.numberTwo} = ${calculation.answer}<td>
        </tr>
        `)
    }
    $('#calcHistoryArea').append(`
    </tbody>
    `)
}

function submitCalcPost() {
    console.log('in submitCalcPost')
    $.ajax({
        method: 'POST',
        url: '/',
        data: currentCalculation
    }).then(function(response) {
        console.log('Submit Calc POST request success; calculating on server side')
        getForRender()
    }).catch(function() {
        alert('submitCalc POST request failed. Try again later.')
    })
}