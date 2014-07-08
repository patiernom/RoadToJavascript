var division = require('./division.js'),
    sum = require('./sum.js'),
    multiply = require('./multiply.js'),
    subtraction = require('./subtraction.js');

dependencyList = [
    {
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
    }
];

module.exports = dependencyList;
