const origin = {x: 1, y: 2};
origin.x = 3;
console.log(origin);

var square = function (x) {
    return x * x;
};

var circle = {
    center: {x: 1.0, y: 2.0},
    radius: 2.5,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());

circle.translate = function (a, b) {
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};

circle.translate(1, 2);
console.log(circle.center);

//delete circle.area;
console.log(circle);

var card = {};
card.suit = "하트";
card.rank = "A";

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

var card1 = new Card("하트", "A");
var card2 = new Card("클럽", "K");
var card3 = new Card("스페이드", "2");

console.log(card1);

function Particle(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx * vx + vy * vy);
}

var p = new Particle(0, 0, 3, 4);

console.log(p);

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}

var p = {x: 0, y: 0};
var c = new Circle(p, 2.0);
console.log(`'넓이 = ${c.area()}'`);

var now = new Date();
console.log(now);

var then = new Date(2018, 5, 10);
console.log(then);

var elaped = now - then;
console.log(elaped);

var start = new Date();
var end = new Date();
var elapsed = end - start;

console.log(now.toLocaleString());
console.log(now.toUTCString());

var empty = [];
console.log(empty);

var f = [2, , 4];
console.log(f);
console.log(f.length);
f.length = 1;
console.log(f);

var a = 0.16;
var b = 0.2;

console.log(a / b);
console.log(a / b == 0.8);
console.log(Math.abs(a / b - 0.8) < 1e-10);

var p = null;
console.log(p && p.name);
p = {name: "Tom", age: 18};
console.log(p && p.name);

var a = [1, 2, 3];
console.log("배열", a, "의 길이는 ", a.length, "입니다.");

var name = "Tom";
var height = 172.3;
console.log("그의 이름은 %s 이며 키는 %fcm 입니다.", name, height);

console.time("answer_time");
alert("확인 버튼을 눌러라");
console.timeEnd("answer_time");