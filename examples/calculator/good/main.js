var Calculator = require('./calculator.js'),
    dependencyList = require('./dependencies.js'),
    dependency,
    leftNumber = process.argv[2] || 0,
    operation = process.argv[3] || "",
    rightNumber = process.argv[4] || 0;


dependencyList.forEach(function(obj) {
    if(operation === obj.condition) {
        dependency = obj.dependency;
    }
});

var calc = new Calculator(dependency);

calc.execute(leftNumber, rightNumber);
calc.print("result : ");
