console.clear()
// Numbers Method
console.log("App running smoothly...");

// Number.isInteger()
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.5));
console.log(Number.isInteger("5.5"));

// Number.isNaN()
console.log(Number.isNaN(NaN))
console.log(Number.isNaN("hello"))
isNaN("hello")

// Number.isFinite()
console.log("line 16.",Number.isFinite(100))
console.log("line 17.",Number.isFinite(Infinity))
console.log("line 18.",Number.isFinite("100"))

// turning text into numbers

console.log(Number("42"));
console.log(Number("42abc"));

console.log(parseInt("42abc"));
console.log(parseInt("54"));
console.log(parseInt("3.99374283"));
console.log(parseFloat("3.99233"));
console.log(parseFloat("5.43"));


// formatting numbers for display

// toFixed()
let pi=3.14559;
console.log(pi.toFixed(2));

let h=(2.2315).toFixed(3)
console.log(h);

let pi1=3.3326;
console.log(pi1.toFixed(3));

// toLocalString()
let big=12345678;
console.log(big.toLocaleString());

// toPrecision()

let pre=121.355;
console.log(pre.toPrecision(4));

let pre1=145.52;
console.log(pre1.toPrecision(4));

let pre2=(12.5323).toPrecision(4)
console.log(pre2);


// practice questions

let whole=7;
console.log(Number.isInteger(whole))

let hel="hello";
console.log(Number.isNaN(hel))

let inf=Infinity;
console.log(Number.isFinite(inf))

let input="25";
console.log(Number(input))
console.log(parseInt(input))

let price1="19.99 USD";
console.log(parseFloat(price1))

let age="30 years old";
console.log(parseInt(age))

let pi3=3.14159265;
console.log(pi3.toFixed(3));

let population=8123456;
console.log(population.toLocaleString())

let n="10";
let m="20";
let o=parseInt(n)+parseInt(m)
console.log(o);

//
console.clear();

let val="007";
console.log("1.",Number.isInteger(parseInt(val)))

let num=0.1;
let num2=0.2;

let raw=" 42 ";
let raw1=parseInt(raw);
console.log(raw1);

let mystery="3.14.15";
let mystery1=Number(mystery)
let mystery2=parseFloat(mystery)
console.log(mystery1);
console.log(mystery2);


let temp=12345.6789;
let temp2=Math.round(temp*100)/100
console.log(temp2);


let cov=5;
let cov2="5";
console.log(5=="5");
console.log(5==="5");

let percent=0.4567;
let per=(percent*100).toFixed(1)+"%";
console.log(per);


// console.log(0.1+0.2===0.3);
