//Variable Declarations and Basic Operations

let age= 72;
age= 17;
console.log(age)

const address= 59;
console.log(address)

let num1= 45;
let num2= 23;
let sum= num1 + num2;
console.log(sum)    

let num3= 45;
let num4= 23;
let product= num1 * num2;
console.log(product)


//String Methods and talking about characters
let text1= "Hello ";

let char= text1.charAt(4);

console.log(char)


const fulName= "Vanessa Jennifer";
let chaar = fulName.charAt(6);
let charr = fulName.charAt(8);
console.log(chaar);
console.log(charr);


let firstName= "Vanessa";   
let lastName= "Jennifer";

let fullName= firstName + " " + lastName;
console.log(fullName);



function fullName1(firstName1, lastName1){
    return firstName1 + " " + lastName1;
}
console.log(fullName1("Munachi", "Mazi"));




//Length, breadth and area of a rectangle..
let length= 7;
let breadth= 8;
let area= length * breadth;
console.log(area);

function area1(length1, breadth1){
    return length1 * breadth1;
}
console.log(area1(3,7));



function area2 (length2, length2){
    return length2 * length2;
}
console.log(area2(5,5));



///Arrow Functions:
let myFunction= (a, b) => a * b;
console.log(myFunction(4, 3));

let myName= (c, d) => c + "" + d;

    console.log(myName("Ami", "Ola"));


    
    /// 26\11\2025
    function greet(name){
        console.log("Good morning " + name);
    }
    greet("Ola")

    //arrow function...
    const greet1 = (name1) => {
        console.log("welcome" + name1)
    } 
    greet1(" AmiOla")


    function sayHi(name= "Just-Ola"){
        console.log("Hi " + name)
    }
    sayHi();


    const person= {
        name2: "AmiOla",
        greet(){
            console.log("Hello " + this.name2)
        }
    }

person.greet();

//iterate...

const house= ["mansion", "bungalow", "duplex"];

for(let i=0; i<house.length; i++){
    console.log(house[i]);
}