// document.getElementById("count-el").innerText = 5
//ctrl+k+c
// let firstBatch= 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch; 


// //let count = 5;

// console.log(count);

// let myAge = 23;

// console.log(myAge);

// let myAge = 23;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;
//  console.log(bonusPoints) 

//  bonusPoints = bonusPoints + 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function miEdad(){
//     console.log(42)
// };

// miEdad();
// let countEl = document.getElementById("count-el")
// let count = 0;

//  function increment() {
//      count = count + 1
//     countEl.innerText = count
//      console.log(count)
//  }

//  increment();

// function save(){
//     console.log(count)

// }

// save()
// let username = "Agus"

// let message = "You have tree new notifications"

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser)

// console.log(message + ", " + username)

// let welcomeEl = document.getElementById("welcome-el")


// let name = "Agus";
  
// let greeting = "Welcome back ";

// let myGretting = greeting + " " + name;

// welcomeEl.innerText = myGretting;

// welcomeEl.innerText = myGretting + " 👋 "

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl)

function increment() {
    count +=
    countEl.innerText = count
};

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
};

let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function func() {
    let frase = greeting + "," + name + "!"
    console.log(frase)
}

func();

function greetLinda() {
    console.log(greeting + ", " + name + "!")
}

greetLinda()


let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points () {
    myPoints = myPoints + 3
}
function remove1Point(){
    myPoints = myPoints - 1
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints)

console.log("2" + 2) // "22" 
console.log(11 + 7) //  18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) // 4
console.log("11" + "14") //