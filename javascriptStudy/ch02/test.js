var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1 == sym2);

var NONE = Symbol("none");
var BLACK = Symbol("black");
var WHITE = Symbol("white");

console.log(NONE.toString());

var s1 = Symbol.for("club");
var s2 = Symbol.for("club");

console.log(s1 == s2);

var sy1 = Symbol.for("club");
var sy2 = Symbol("club");

console.log(Symbol.keyFor(sy1));
console.log(Symbol.keyFor(sy2));

var str = `I'm going to school.
            Oh! SHIT! I'm too late`;

console.log(str);

var a = 2, b = 3;
console.log(`${a} + ${b} = ${a + b}`);
var now = new Date();
console.log(`오늘은 ${now.getMonth() + 1}월 ${now.getDate()}일 입니다`);

var card1 = {suit: "하트", rank: "A"};
var card2 = {"suit": "하트", 'rank': "A"};

console.log(card1.rank);
console.log(card2["suit"]);
console.log(card2.rank);
console.log(card1["suit"]);

card1.value = 14;
delete card1.rank;
console.log(card1);

console.log("value" in card1);
console.log("rank" in card2);

var p = {x: 1.0, y: 2.5};

var circle = {
    center: {x: 1.0, y: 2.0},
    radius: 2.5
};

console.log(p);
console.log(circle);

var person = {
    name: "슈퍼맨",
    age: 18,
    sex: "남",
    married: false
};

var a = card1;

console.log(a.suit);
console.log(a === card1);

function square(x) {
    return x * x;
}

console.log(square(3));

function dist(p, q) {
    var dx = q.x - p.x;
    var dy = q.y - p.y;
    return Math.sqrt(dx * dx + dy * dy);
}

var p1 = {x: 1, y: 1};
var p2 = {x: 4, y: 5};
var d = dist(p1, p2);
console.log(d);

var bark = function() {console.log("bow bow!");};
bark();


function f(){
    console.log(k);
    var k = "local";
    console.log(k);
    return k;
}

f();

let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);