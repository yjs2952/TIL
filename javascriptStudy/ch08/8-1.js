/*
function norm(x) {
    var sum2 = sumSquare();
    return Math.sqrt(sum2);

    function sumSquare() {
        sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i] * x[i];
        }
        return sum;
    }
}

var a = [2, 1, 3, 5, 7];
var n = norm(a);
console.log(n);*/

function multiple(a, b) {
    b = b || 2;
    //return a*b;
    console.log(a * b);
}

multiple(2, 3);
multiple(2);

function f(x, y) {
    arguments[1] += 2;
    console.log(`x = ${x}, y = ${y}`);
}

f(1, 2);