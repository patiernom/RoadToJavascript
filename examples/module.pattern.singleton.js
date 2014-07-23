var Module = (function () {
    var counter = 0;

    function setCounter(value) {
        counter = value;
    }

    function publicFunc() { console.log("counter value "+ counter); }

    return {
        exposedFunc: publicFunc,
        setCounter: setCounter
    }
})(); //IIFE - Immediately Invoked Function Expression

var instance1 = Module;
var instance2 = Module;

instance1.setCounter(11);
instance2.setCounter(6);
instance1.exposedFunc();
instance2.exposedFunc();