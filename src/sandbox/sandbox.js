import {teachers} from "./teachers.js"
console.log("Sandbox environment initialized🌟")

console.log(teachers);

function showWelcomeMessage() {
    return ("Welcome to the sandbox!");
}

console.log(showWelcomeMessage());

// -- Function Declaration:
// function sayHi(name) {
//     return `Hello ${name}`;
// }
// console.log(sayHi("RACE"));

// -- Arrow function eksplicit:
// const sayHii = (name) => {
//     return `Hii ${name}`
// };

// -- Arrow function eksplicit:
const sayHii = (name) => `Hii ${name}`;
console.log(sayHii("Kejser"));

