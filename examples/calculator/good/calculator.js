module.exports = function (operation, output) {
    var result = NaN;

    function execute(num1, num2) {
        result = operation(num1, num2);
    }

    function print(msg) {
        output.log("result: "+ result);
    }

    return {
        print: print,
        execute: execute
    }
};