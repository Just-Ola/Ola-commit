var votingAge = 18;

var HaveVotersCard = false;

if (votingAge >= 18 || HaveVotersCard) {
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
}


var myChoice="Rice"
var available="Spag"

if(myChoice==available) {
    console.log("You can buy")
}  else{
    console.log("Don't buy")
}


var age= 16
paidTution= "True"
passedJAMB="True"
Have5credits="True"

if( age>= 16 && paidTution && passedJAMB && Have5credits){
    console.log("You r admitted")
}else{
    console.log ("You are not admitted")
}




//you want to travel to UK, for 1wk tourism
//write a if..else conditional statement that tests
//if you have a valid passport, visa, flight booking and hotel reservation
//  You can travel otherwisw, you cannot travel

var hasPassport= true
var hasVisa= true
var flightbooking= true
var hotelreservation= true

if(hasPassport && hasVisa && flightbooking && hotelreservation){
    console.log("You can travel bruvv")
} else{
    console.log("You cannot travel bruvv")
}



var hasPassport= true
var hasVisa= true
var flightbooking= false
var hotelreservation= false

if((hasPassport || hasVisa) && (flightbooking || hotelreservation)){
    console.log("You can travel bruvv")
} else{
    console.log("You cannot travel bruvv")
}


//Ternary Operator
var votingAge = 18;
votingAge>=18 ? console.log("You can vote") : console.log("You cannot vote");

var votingAge = 16;
votingAge>=18 ? console.log("You can vote") : console.log("You cannot vote");