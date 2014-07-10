
var leftNumber = process.argv[2] || 0;
var operation = process.argv[3] || "";
var rightNumber = process.argv[4] || 0;

if(operation === "") 
{
	console.log("result: nop");
}
else {
	if(operation === "+") 
	{
		var result = ((1*leftNumber) + (1*rightNumber));
	    console.log("result: "+ result);
	} 
	else if(operation === "-") 
	{
		var result = leftNumber - rightNumber;
	    console.log("result: "+ result);
	} 
	else if(operation === "*") 
	{
		var result = leftNumber * rightNumber;
	    console.log("result: "+ result);
	} 
	else if(operation === "/") 
	{
		var result = leftNumber / rightNumber;
	    console.log("result: "+ result);
	} 
	else if(operation === "%") 
	{
		var result = leftNumber % rightNumber; 
		console.log(result);
	} 
	else if(operation === "bin") 
	{
		var base = 2;
		var limit = base - 1;

		var nextNumber = leftNumber;
		var conversionArray = new Array();
		while(nextNumber>=limit) 
		{
		  conversionArray.push(nextNumber%base);
		  nextNumber = Math.floor(nextNumber/base);  
		}

		var len = conversionArray.length;
		var result = "";
		for(var i = 0;i<len; i++) {
		  result += conversionArray[i];		  
		}

		console.log("result: "+ result)
	}
}