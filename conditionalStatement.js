//Control Flow Statement in Javascript: This is used to control the flow of execution in Javascript program. They are used to make decision, execute loops, and handle errors.
//Types
//1. Conditional Statements
//2. Loops
//Try/catch statements

//1. Conditional Statements: This is used to execute different actions based on different conditions.
//if statement,   else statement,   else if statement

//If statement: An if statement in JavaScript lets you run code only if something is true.
if (true) {
  console.log("execute");
}

// let age = 15;

// if (age > 18) {
//   console.log("You're an adult");
// }

// let country = "Naija";
// let age = 20;

// if (age >= 18 && country == "Naija") {
//   console.log("You can get driver's license");
// }

//If else statement: An if else statement in JavaScript lets you run one block of code if something is true, and another block if it is false.

// let country = "Naija";
// let age = 27;

// if (age >= 18 && country == "Naija") {
//   console.log("You can get driver's license");
// }
// else{
//   console.log("You are a minor cannot get driver's license.");
// }

//else if: An else if statement in JavaScript lets you check more than one condition. It runs different code for each condition that is true.

// let school = "University";
// let studentAge = "20";
// if (studentAge >=18) {
//   console.log("You are a university student.");
// }
// else if (studentAge > 10 && studentAge < 18) {
//   console.log("You are a secondary school student.");

// }
// else{
//   console.log("You are a primary school student");

// }

function check() {
  let inputs = document.getElementById("inputs").value;
  if (inputs >= 18 && inputs < 25) {
    document.getElementById("show").innerText = "You are a University student";
  } else if (inputs >= 25) {
    document.getElementById("show").innerText = "You are a working class adult";
  } else if (inputs > 10 && inputs < 18) {
    document.getElementById("show").innerText =
      "You are a secondary school student";
  } else {
    document.getElementById("show").innerText = "You are in elementary school.";
  }
}

//Switch: A switch statement in JavaScript is used to execute one of many code blocks based on a condition. It is often used as an alternative to multiple if-else statements when you need to check many possible conditions. It helps you choose between different options. It's like asking, "What should I do today?" and based on the answer (like Monday, Tuesday, etc.), it tells you what to do.

let value = false;

switch (typeof value) {
  case "number":
    console.log("Number");

    break;
  case "string":
    console.log("String");

    break;
  case "boolean":
    console.log("Boolean");

    break;

  default:
    console.log("Invalid");

    break;
}

let weekDay = 1;

switch (weekDay) {
  case 1:
    weekDay = "Monday";

    break;
  case 2:
    weekDay = "Tuesday";

    break;
  case 3:
    weekDay = "Wednesday";

    break;
  case 4:
    weekDay = "Thursday";

    break;
  case 5:
    weekDay = "Friday";

    break;
  case 6:
    weekDay = "Saturday";

    break;
  case 7:
    weekDay = "Sunday";

    break;

  default:
    weekDay = "Invalid";
    break;
}

console.log("Today is " + weekDay);

//Ternary Operator
//Condition ? Value_If_True : Value_If_False

let uniAge = 23;

let response =
  uniAge >= 18 && uniAge <= 25
    ? "You can be in the University"
    : "You can't be in the University. It's either you are too old or young";

console.log(response);
