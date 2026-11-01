console.log("App running");

// 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// 3

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("q3", i);
  }
}
// 4
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("q4", sum);

// 5
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}
// 6
let div = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    div += 1;
  }
}
console.log(div);
// 7
let mul1 = 1;
for (let i = 5; i >= 1; i--) {
  mul1 *= i;
}
console.log(mul1);

// 8
let str = "berchman";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);

// 9
let vow = "praise";
let vow2 = 0;
for (let i = vow.length - 1; i >= 0; i--) {
  if (vow[i] === "a" || vow[i] === "e" || vow[i] === "i") {
    vow2 += 1;
  }
}
console.log(vow2);

// 10
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// 11
let num = 20;
let steps = 0;
while (num >= 1) {
  num /= 2;
  steps++;
}
console.log(steps);

// 12

let arr = [12, 33, 45, 22, 16, 101, 3223];
let p = 0;
while (arr[p] <= 100) {
  p++;
}
console.log(arr[p]);

// 13

let i = 0;
let arr1 = [50, 30, 10, 2];
while (arr1[i] >= 10) {
  i++;
}
console.log(arr1[i]);

// 13
let down1 = 10;
while (down1 >= 1) {
  console.log(down1);
  down1--;
}
console.log("liftoff");

//14

let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 5);

// 15

let max = [3, 7, 2, 9, 4];
let j = 0;
while (max[j] <= 8) {
  j++;
}
console.log(max[j]);
