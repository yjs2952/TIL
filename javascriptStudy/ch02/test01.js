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

