function makeMultiplier(x) {
    return function(y) {
        return x*y;
    };
}

var mul2 = makeMultiplier(2);
var mul10 = makeMultiplier(10);
console.log(mul2(3));
console.log(mul10(3));



