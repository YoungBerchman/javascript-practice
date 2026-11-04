function greet(name) {
  console.log("hello" + " " + name);
}
greet("peter");
greet("john");
greet("Am coming home");
// 1
function double(num) {
  return num * 2;
}
let result = double(5);
console.log(result);
const pick = (add) => {
  return add + 10;
};
let result1 = pick(20);
console.log(result1);

// 2
function add(a, b) {
  return a + b;
}
// let total = add(50, 136);
console.log(add(3, 5));
console.log(add(29, 31));

// 3
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 5));

//
const mul = (a, b) => {
  return a * b;
};
console.log(mul(3, 5));
//
function mul1(a, b) {
  console.log(a * b);
}
mul1(3, 5);
mul1(20, 10);

//
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(8));
console.log(isEven(7));
console.log(isEven(0));

//
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("5.", isEven(6));

function isOdd(oops) {
  if (oops % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(9));
console.log(isOdd(8));

function sit() {
  console.log("hello");
}
function pit() {
  console.log("hi");
}
sit();
pit();
//
function squ(twice) {
  return twice * twice;
}
console.log(squ(4));
console.log(squ(10));
console.log(squ(20));

//
function join(a, b) {
  return a + " " + b;
}
console.log(join("Praise", "Ade"));
console.log(join("John", "Egbe"));

function Odd(sim) {
  if (sim % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(Odd(10));
console.log(Odd(9));

function large(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
console.log(large(3, 8));

function first() {
  let v = "goodness";
  console.log(v);
}
first();

let greeting = "evening";
function eve() {
  console.log(greeting);
}
eve();
let x = 5;
function show() {
  console.log(x);
}
x = 9;
show();

let outsideThing = "I am outside";

// function myRoom() {
//   let insideThing = "I am inside";

//   console.log(outsideThing);
// }
// myRoom();
// console.log(outsideThing);
// console.log(insideThing);

let foot = "i am playing football";
function ball() {
  console.log(foot);
}
ball();
//

function roomOne() {
  let toy = "car";
  return toy;
}
function roomTwo(thing) {
  console.log(thing);
}
roomTwo(roomOne());

//
function square1(num) {
  return num * num;
}
function squareAndAdd(a, b) {
  return square1(a) + square1(b);
}
console.log(squareAndAdd(5, 5));
console.log(squareAndAdd(6, 4));
console.log(squareAndAdd(12, 12));

//
function square2(num) {
  return num * num;
}
function squareOfLarger(a, b) {
  return square2(large(a, b));
}
console.log(squareOfLarger(-9, 5));
