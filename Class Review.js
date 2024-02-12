// 1. Identify Value Types
// JavaScript has different data types including String, Number, Boolean, Null, Undefined, Symbol, and Object.
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let address; // Undefined
let salary = null; // Null

// 2. Initialize a Variable with let
// let allows you to declare variables that are limited to the scope of a block statement.
//let message = "Hello, world!"

// 3. Top-Down Direction of Code
// JavaScript code is read and executed from top to bottom.
let first = "First line";
console.log(first); // Outputs: First line
let second = "Second line";
console.log(second); // Outputs: Second line

// 4. Reassign a Variable
// Variables declared with let can be reassigned.
let message = "Hello";
message = "World";
console.log(message); // Outputs: World

// 5. Using Console
// The console.log() method is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
console.log("This is a message");

// 6. Concatenate Strings with +
// Strings can be joined using the + operator.
let greeting = "Hello, " + "world!";
console.log(greeting); // Outputs: Hello, world!

// 7. Inline Math
// You can perform math operations directly in JavaScript.
let sum = 10 + 5; // 15
console.log(sum);

// 8. Single vs Double Quotes
// Both are used for strings, and they work the same way.
let singleQuote = 'Hello';
let doubleQuote = "World";

// 9. Commenting Out Lines
// Use // for single line comments and /* */ for multi-line comments.
// This is a single line comment
/*
This is a 
multi-line comment
*/

// 10. Utilize Variables in Code
// Variables can be used to store data and manipulate it later.
let number = 10;
let anotherNumber = number + 5; // 15

// 11. Reading and Running Mocha Tests
// Mocha is a testing framework. Typically, you'd read tests to understand the expected behavior of your code and run them using the mocha command in the terminal.

// 12. Functions in Code
// Functions are blocks of code designed to perform a particular task, making code reusable.

// Define a Function
function greet() {
    console.log("Hello!");
}

// Call a Function
greet(); // Outputs: Hello!

// Function Naming
// Choose names that clearly describe what the function does.
function calculateArea(width, height) {
    return width * height;
}

// Function Initialization
// Functions are not executed immediately; they are "saved for later use".

// JS Reads Functions First
// JavaScript hoists functions declared with the function keyword, allowing them to be used before they are defined in the code.

// Parameters in Functions
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.

function add(a, b) {
    //let sum = a + b
  //console.log(sum)
  return a + b;
}
add(3, 5)

// Using Multiple Parameters
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Modulus Operator
// Modulus (%) operator returns the remainder after division.
let remainder = 5 % 2; // 1

// Return from Function
// return specifies the value to be returned by the function.
function subtract(a, b) {
    return a - b;
}

// 13. Operators
// Less Than, Greater Than (<, >): Compare two values.
// Strict Equality (===): Checks both value and type.
// Not Equal (!==): Checks if values are not equal.
// Logical AND (&&), OR (||): Used for logical operations.
// Chaining Booleans: Combining multiple boolean expressions.
// TypeOf Operator: Returns the type of a variable.
// toString Method: Converts a value to a string.
// parseInt, Number: Converts strings to numbers.

// 14. Control Flow
// if, else Statements: Perform different actions based on different conditions.
// .length Property: Returns the length of a string.
// Logical NOT Operator (!): Inverts a boolean value.
if (message.length > 5) {
    console.log("Long message");
} else {
    console.log("Short message");
}

// 15. Arrays
// Arrays are used to store multiple values in a single variable.
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // 3
// Accessing Array Elements: Use the index, starting from zero.
// Mutating Arrays: Change elements using their indexes.
// Array Methods: push, pop, shift, unshift, slice, splice, split, join, indexOf, concat.

// 16. Loops
// Loops are used for running the same block of code using different values each time.

// For Loop: Runs a block of code a certain number of times.
// Increment (++), Decrement (--): Increase or decrease values.
// For...of Loop: Iterates over iterable objects (like arrays or strings).
// Infinite Loops: Occur when the loop condition is always true.
// Template Literals: Use back-ticks and ${} to embed expressions.

// 17. Node.js and Console Args
// Node.js is used to run JavaScript outside a browser.

// To run a JavaScript file: node script.js.
// Access command-line arguments using process.argv.

// 18. Advanced Concepts
// Writing Complex Code from Pseudocode: Turn logical steps into code.
// Compound Assignment (+=, etc.): Shorthand for updating variables.
// Flow Charts: Visualize the logic and flow of a program.