// //JS Functions
// //A function is a reusable block of code that allows you to perform a specific task

// //4 ways a function can be declared
// //1.  Declaration Function
//   function functionName() {
//     //code goes here
//   }
// functionName()

// //Example - this function will return the square of a number
// //   function square() {
// //     let num = 2 
// //     let sq = num * num
// //     console.log(sq)
// //   }
// //  square() 

// //function name myFunction
// //add two numbers
// //display results to the console
// //call the function


// //2.  Expression Function
// //An anonymous function. after you create a function without name and we assign it to a variable.
// // return a value from the function that calls the variable.
// //Basic syntax
// const square =  function(n) {
//     return n * n
//     console.log(square(12))
// }

// //define variable add, set to a function
// const add = function(n) {
//   return n + n
//   console.log(add(12))
// }

// //3.  Anonymous Function
// //A function without a name
// const anonymousFun = function() {
//     console.log ('Hi,anonymous function')
// }
// //4.  Arrow Function
// //an alternative to writing a function. uses the arrow instead of the keyword function
// function square(n) {
//     return n * n
// }

// const square = n => {
//     return n * n
// }
// console.log(square(2))

const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);




// Name two ways to declare a function.
//1. Declaration
//function functionName() {
  //code goes here

//functionName()

//2. Expression
//const name = function()


// What type of function?
// What is the name of the variable?

let a = function() {
  //do something
  let b = function() {
    console.log('Hello World!')  
  }
 }
 a();


//Self Invoking function - an anonymous function that does not have to be called to return a value
//example
let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)

//Arrow function
//Arrow function uses arrow instead of the keyword function to declare a function. 
//Let us see both function declaration and arrow function.

//Example
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4

//function with a one parameter
//
//In a function we can pass different data types
//(number, string, boolean, object, function) as a parameter.

//Example
// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
  return number * number
}

console.log(square(10))


//function with two parameters

// function with two parameters

// Name(parm1, parm2) {
//   //code goes her
// }
functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))

//function with many parameters
// function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
//   //code goes here
// }
// functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));

//function using the arrow method
    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

//this function using declararion function 
function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;
  return area;
}
console.log(areaOfCircle(10))

//Unlimited number of parameters in regular function
//A function declaration provides a function scoped arguments array like object. 
//Any thing we passed as argument in the function can be accessed 
//from arguments object inside the functions. Let us see an example
// Let us access the arguments object
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


//using an arrow function

// Let us access the arguments object
​
const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

//anonymous function - function without a name
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

//expression function

// Function expression
//this functin is assigned to a variable
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4

//functions with default parameters
// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)


//example
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))

