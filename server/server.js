const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log('server running on port', port);
});


let currentAnswer = '';
let calcHistoryArray = []

app.get('/retrieveArray', function(req, res) {
    console.log('Yo Schwami retrieving array');
    res.send(calcHistoryArray);
})

app.get('/retrieveCurrentAnswer', function(req, res) {
    stringCurrentAnswer = currentAnswer.toString()
    res.send(stringCurrentAnswer)
})

app.post('/', (req, res) => {
    // console.log("app.post success.") // 
    let incomingNumberOne = req.body.numberOne;
    let incomingNumberTwo = req.body.numberTwo;
    let incomingOperator = req.body.operator
    
    let incomingObject = {
        numberOne: incomingNumberOne,
        numberTwo: incomingNumberTwo,
        operator: incomingOperator
    }

    
    // console.log('incoming object is', incomingObject)
    // console.log(doMath(incomingObject));
    currentAnswer = doMath(incomingObject);
    calcHistoryArray.push(incomingObject);
    // console.log('testing add answer to array', calcHistoryArray)
    
    res.sendStatus(201);

    })

function doMath(object) {
    let num1 = Number(object.numberOne)
    let num2 = Number(object.numberTwo)
    console.log('object is', object)
    if (object.operator === '+') {
        // console.log('gonna do a plus math on', num1, 'and', num2);
        object.answer = (num1 + num2)
        currentAnswer = (num1 + num2)
        console.log('current answer is', currentAnswer)
        return (num1 + num2);
    }
    if (object.operator === '-') {
        // console.log('gonna do a minus math');
        object.answer = (num1 - num2)
        currentAnswer = (num1 - num2)
        return (num1 - num2);
    }
    if (object.operator === '*') {
        // console.log('gonna do a multply');
        object.answer = (num1 * num2)
        currentAnswer = (num1 * num2)
        return (num1 * num2);
    }
    if (object.operator === '/') {
        // console.log('gonna do a division');
        object.answer = (num1 / num2)
        currentAnswer = (num1 / num2)
        return (num1 / num2);
    }
}