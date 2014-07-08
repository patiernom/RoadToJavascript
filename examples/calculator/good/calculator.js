module.exports = function (operation) {
    var result = 0;

    function execute(num1, num2) {
        result = operation(num1, num2);
    }

    function print(msg) {
        console.log(msg + result);
    }

    return {
        print: print,
        execute: execute
    }
};