console.clear()
// for loop

console.clear()
// for(let i=0; i<5;i++){
//     console.log(i);
    
// }

// while loop

// let count=0;
// while(count<5){
//     console.log(count);
//     count++;
// }

// do...while loop

// let x=0;
// do{
//     console.log(x);
//     x++;
// }while(x<5);


// practice questions
// 1

// print from 1 to 10
for(let y=1;y<=10;y++){
    console.log(y);
    
}

// 2
// print numbers from 10 downward
for(let down=10;down>=1;down--){
    console.log("2",down);
    
}

// 3
// print even numbers
for(let even=0;even<=20;even++){
    if(even%2===0){
        console.log(even);
        
    }
    
    
}

// 4
// sum all numbers from 1 to 100
let sum1=0;
for(let i=1;i<=100;i++){
    sum1=sum1+i;
}
console.log(sum1);

// 5
// print the multiplication table of 5(5x1 to 5x10)
for(let i=1;i<=10;i++){
    console.log(5*i);
    
}

// 6
// count how many numbers between 1 and 50 are divisible by 3

let cou=0;
for(let i=1;i<=50;i++){
    if(i%3===0){
       cou+=1 
    }
}
    console.log("6.",cou);

// 7
// find the factorial of 5!
let mul=1;
for(let i=5;i>=1;i--){
        mul*=i
    
}
console.log(mul);

// 8
// Reverse a string using a loop

let str="Berchman";
let reversed="";
for(let i=str.length-1;i>=0;i--){
    reversed+=str[i]
}
console.log(reversed);
