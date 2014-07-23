var Calculator = require('./calculator.js'),
    operationHandler = require('./operationHandler.js');

var leftNumber = process.argv[2] || 0,
    operator = process.argv[3] || "",
    rightNumber = process.argv[4] || 0;


var calc = new Calculator(operationHandler(operator), console);
calc.execute(leftNumber, rightNumber);
calc.print();