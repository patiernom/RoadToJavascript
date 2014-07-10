module.exports = function (){
    return {
        operator : "bin",
        operation : function (value) {
            var base = 2;
            var limit = base - 1;

            var nextNumber = value;
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

            return result;
        }
    };
};