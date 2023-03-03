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

app.post('/plusButton', function(req, res) {
    console.log('Yo Schwami plus button pushed');
    currentOperator = +    
    res.send(calcHistoryArray);
})