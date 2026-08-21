import {teachers} from "./teachers.js"
console.log("Sandbox environment initialized🌟")

console.log(teachers);

function showWelcomeMessage() {
    return ("Welcome to the sandbox!");
}

console.log(showWelcomeMessage());

function sayHi(name) {
    return `Hello ${name}`;
}

console.log(sayHi("RACE"));