function count() {
    var arr = [];

    for(var i = 0; i<5; i++) {

        arr.push(function () {
                console.log('array current index: ' + i);
            }
        );
    }

    return arr;
};

var arr = count();
arr.forEach(function(item) {
    item();
});