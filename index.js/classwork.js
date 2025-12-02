//first Q
let a= 3;
let b= 7;

let sum= a+b;
console.log(sum);

//Num 2

let num= 5;
 if(num % 2===0){
    console.log ("Even Number");
 }
 else{
    console.log("Odd Number");
 }

 ///Num 3 convertion of strings to uppercase

 let greet= "wassup"
 console.log(greet.toUpperCase())


//Num 4 Finding the first element ain an array
let Ages= [12, 15, 18, 20, 25];

console.log (Ages[0]);

//Num 5 finding square of a number
let c = 5;
let square = c*c;
console.log(square);

//Num 6 comparing two strings and returning true or false
let string1 = "hello";
let string2 = "Hello";
console.log(string1 === string2);

//Num 7 returning length of string
let word= "Ola"
console.log(word.length);

// Num 8 returning last element of arrays
let array= [2, 7, 8, 20];

console.log(array[3]);

//Num 9 multiply numbers in array
let array1= [2, 7, 8, 20];
let multiple= 2*7*8*20;
console.log(multiple)

//Num 10 a function thats says Hello name

let name = "Ola";
let greet1 = "Hello";

function greeting(greet1,name){
  return greet1 + " " + name;
}

console.log(greeting("Hello","Ola"));


const car = {
   model: "Lambo",
   year: "2025",
   color: "Black"
}
console.log(car)
console.log(car.model)


//Time nd Date...

const person={
   name: "Hamzat",
   greet(){
      console.log("Good morning", this.name)
   }
}
person.greet();


const d= new Date()
console.log(d)

const time1= d.getHours()
console.log (time1)

const Today= d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
console.log (Today)

const state = new Map([
   ["Anambra", "Akwa"],
   ["Oya", "Ibadan"],
   ["Enugu", "Enugu"]

]);

console.log(state)
console.log([...state][0])
console.log([...state][1])
console.log([...state][2])

