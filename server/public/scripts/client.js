let symbol = "+"; 
let answer

function math(num1, num2) {
    answer = (num1) + symbol + (num2) 
}

math(1,2)
// I think we're going to need to send the index.html 
// numerical inputs EVERY time to variables when an operand POST is called.
// basically if + is clicked, transmit the numbers (if any) to a math-eval 
// and only transmit the final result back when the = sign is clicked.
// so will be doing a bunch of NaN math

// discuss with Paige.
// External libraries and eval() are verboten.
// Other option is some kind of string parsing, I think.

// create a client side object consisting of 2 numbers and an operator.
// server side logic based on operator? eg. if operator: + do a num1 + num2, if operator: - do a 
// num1 - num2, etc.

// render using an i++ loop, use that to generate IDs, use that for re-running old calcs.