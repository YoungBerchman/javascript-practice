console.clear();
console.log("successful");

// logic & control flow

let temp=30;
if(temp>35){
    console.log("Hot");
    
}else if(temp > 200){
    console.log("warm");
    
}else if(temp > 28){
    console.log("cold");
    
}else{
    console.log("dessert");
    
}

let day="Mon";
switch(day){
    case "Sat":
    case "Sun":
    console.log("Weekend");
    break;
    case "Mon":
        console.log("Start of week");
        break;
        default:
            console.log("Midweek");
            
}

let y="picture";
switch(y){
    case "image":
        console.log("true");
        break;
        case "picture":
            console.log("false");
            break;
            default:
                console.log("no idea");
                   
}

// Tenary operator
let age=20;
console.log(age >=18 ? "adult" : "minor");

let b=5;
console.log(b== "5" ? "true" : "false");

let j=20;
console.log(j>=20 ? "you are correct" : "you are wrong");

// practice problem

let gre=18;
if(gre>=17){
    console.log("i am old enough");
    
}else if(gre<16){
    console.log("i am not old enough");
    
}else{
    console.log("never mind");
    
}

//
let age1=20;
let hasID=true;

if(age1>=18 && hasID===true){
    console.log("You can enter");
    
}else{
    console.log("You can't enter");
    
}

let isStudent=true;
let isStaff=false;

if(isStudent || isStaff){
    console.log("yes");
    
}else{
    console.log("no");
    
}
let isBlocked=false;
if(!isBlocked){
    console.log("yes you can");
    
}else{
    console.log("no you can't");
    
}
let score=70;
if(score >=30){
    console.log("A");
    
}else if(score >= 80){
    console.log("B");
    
}else if(score > 71){
    console.log("C");
    
}else{
    console.log("D");
    
}

let day1=3;

switch(day1){
    case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
   break; 
   case 3:
    console.log("wednesday");
    break;
    default:
        console.log("thursday");
        
}
let day2="sat";
switch(day2){
    case "mon":
    console.log("weekdays");
    break;
    case "tues":
    console.log("same");
    break;
    default:
    case "sat":
    console.log("weekends");
    
}

console.log("10">"8");
console.log("5">3);
