var division = require('./division.js'),
    sum = require('./sum.js'),
    multiply = require('./multiply.js'),
    subtraction = require('./subtraction.js'),
    binconverter = require('./binconverter.js');

function operatorHandler (operator) {
    
    var dependencyList = [{
                        condition: "/",
                        dependency: division
                    },
                    {
                        condition: "+",
                        dependency: sum
                    }, 
                    {
                        condition: "*",
                        dependency: multiply
                    }, 
                    {
                        condition: "-",
                        dependency: subtraction
                    }, 
                    {
                        condition: "bin",
                        dependency: binconverter
                    }, 
                    {
                        condition: "",
                        dependency: function() { return "nop"; }
                    }];

    var dependency;
    dependencyList.forEach(function(obj) {
        if(operator === obj.condition) {
            dependency = obj.dependency;
        }
    });

    return dependency;
}

module.exports = operatorHandler;
