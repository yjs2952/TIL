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