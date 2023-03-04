const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log('server running on port', port);
});

let currentOperator;
let currentAnswer;
let calcHistoryArray = []

app.get('/retrieveArray', function(req, res) {
    console.log('Yo Schwami retrieving array');
    res.send(calcHistoryArray);
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
    console.log('incoming object is', incomingObject)
    res.sendStatus(201);
    })