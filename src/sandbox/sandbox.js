import { teachers } from "./teachers.js";
console.log("Sandbox environment initialized🌟");

console.log(teachers);

function showWelcomeMessage() {
  return "Welcome to the sandbox!";
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

const course = {
  title: "React",
  teacher: "RACE",
  duration: "1h 30min",
  isActive: true,
};

console.log(course);

// Property access
console.log(course.title);
console.log(course.teacher);
console.log(course.duration);
console.log(course.isActive);
console.log(course["title"]);

// Shorthand properties
const name = "Anna";
const age = 24;
const email = "anna@example.com";

const student = {
    name,
    age,
    email
};

console.log(student)
