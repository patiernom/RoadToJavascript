var leftNumber = process.argv[2] || 0;
var operation = process.argv[3] || "";
var rightNumber = process.argv[4] || 0;


if(operation === "+"){
    console.log(leftNumber + rightNumber);
}else if(operation === "-"){
    console.log(leftNumber - rightNumber);
}else if(operation === "*"){
    console.log(leftNumber * rightNumber);
}else if(operation === "/"){
    console.log(leftNumber / rightNumber);
}