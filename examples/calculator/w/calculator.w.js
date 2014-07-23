
leftNumber = process.argv[2];
operation = process.argv[3];
rightNumber = process.argv[4];

if (typeof(leftNumber) === "undefined" || leftNumber === null || leftNumber === "") {
    leftNumber = 0;
}

if (typeof(operation) === "undefined" || operation === null || operation === "") {
    leftNumber = "";
}

if (typeof(rightNumber) === "undefined" || rightNumber === null || rightNumber === "") {
    rightNumber = 0;
}

if (operation === "") {
    console.log("result: nop");
}
else {
    if (operation === "+") {
        result = ((1 * leftNumber) + (1 * rightNumber));
        console.log("result: " + result);
    }
    else if (operation === "-") {
        result = leftNumber - rightNumber;
        console.log("result: " + result);
    }
    else if (operation === "*") {
        result = leftNumber * rightNumber;
        console.log("result: " + result);
    }
    else if (operation === "/") {
        result = leftNumber / rightNumber;
        console.log("result: " + result);
    }
    else if (operation === "%") {
        result = leftNumber % rightNumber;
        console.log(result);
    }
    else if (operation === "bin") {
        base = 2;
        limit = base - 1;

        nextNumber = leftNumber;
        conversionArray = new Array();
        while (nextNumber >= limit) {
            conversionArray.push(nextNumber % base);
            nextNumber = Math.floor(nextNumber / base);
        }

        len = conversionArray.length;
        result = "";
        for (var i = 0; i < len; i++) {
            result = result + conversionArray[i];
        }

        console.log("result: " + result)
    }
}