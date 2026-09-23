console.log("App running ....")
let x="ball";
let y="football";
console.log(x.concat(y))
console.clear()

// math method

// math.ceil()
console.log(Math.ceil(4.10))
console.log(Math.ceil(2.111290))

// math.round
console.log(Math.round(4.5))
console.log(Math.round(4.24))

// math.floor
console.log(Math.floor(4.5))
console.log(Math.floor(4.912))
console.log(Math.floor(4.10))

// math.trunc
console.log(Math.trunc(2.8552))
console.log(Math.trunc(4.89))

// math.abs()
console.log(Math.abs(-1))

// math.sign()
console.log(Math.sign(-2))
console.log(Math.sign(1))

// math.pow()

console.log(Math.pow(2,3))
console.log(Math.pow(2,5))

// math.sqrt()
console.log(Math.sqrt(64))
console.log(Math.sqrt(25))
console.log(Math.sqrt(128))

// math.cbrt()
console.log(Math.cbrt(25))
console.log(Math.cbrt(64))

// math.min()
let z=(12,34,21,12,4,34,10)
console.log(z);

console.log(Math.min(32,55,121,3543,1212,1213));

// math.max()

let r=(23,2315,5,55,23,122)
console.log(Math.max(r))

// math.random()
console.log(Math.trunc(Math.random()*100))

let k=[12,2,34,322,21,12,34,23,11,26]
console.log(Math.max(...k))


// problems

//1
let temp=-7.8;
console.log(Math.abs(temp))

//2
let prices= [19.99,5.50,42.10,8.75]
console.log(Math.max(...prices))

//3
let radius=5;
console.log(2*(Math.PI)*radius)

//4
let num=15.7;
console.log(Math.trunc(num))

//5
let base=2;
let exp=10;
console.log(Math.pow(2,10))

//6
let si=-3;
console.log(Math.sign(si))

//7
let dice=Math.floor(Math.random()*6)+1;
console.log("number 6.",dice);

//8
let b=5;
let u=2;
let j=4;
let f=Math.pow(b,u)+ Math.pow(j,u)
console.log(Math.sqrt(f))
console.log(Math.pow(0,0));
console.log(Math.max());
console.log(Math.min());

