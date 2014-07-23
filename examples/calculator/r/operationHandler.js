"use strict";

function operatorHandler (operator) {
   var modulesLoader = require('require-all'),
       operations = modulesLoader(__dirname + '/operations'),
       dependency;

    for (var op in operations){
        if (operations.hasOwnProperty(op)){
            var operation = operations[op]();

            if(operator === operation.operator) {
                dependency = operation.operation;
            }
        }
    }

    return dependency;
}

module.exports = operatorHandler;