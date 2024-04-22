
//JS Functions
//A function is a reusable block of code or programming statements designed to perform a certain task. 
//A function is declared by a function key word followed by a name, followed by parentheses (). 
//A parentheses can take a parameter. If a function take a parameter it will be called with argument. 
//A function can also take a default parameter. To store a data to a function, a function has to return certain data types. 
//To get the value we call or invoke a function. Function makes code:

//A function can be declared or created in couple of ways:

//Declaration function
function myFunction() {
  //code
}
myFunction()

var name = "Bridgett"

function myName() {
 return name
}
myName()
console.log(name)

function yourName() {
  // let name = "Bridgett"
 }
 yourName()
 myName()
 console.log(name)
 

//Expression function
//Anonymous function 
const add = function(n) {
  return n + n
}
console.log(add(1))

//Anonymous function
//const sum = function(n) {
 // return n + n
//}
////console.log(sum(1)

//Arrow function
const myFunction = n => {
  //code
}
myFunction()


//Creating a function with a parammeter
 function myName(param1) {
   let name = "Bridgett"
  console.log(name)
 }
 myName("Carlos")

 function square(number) {
return number * number

}
 square(10)
 myName()


// //functions with two parameters
 function functionName(parm1, parm2) {
//   //code goes here 
 }
 functionName(1, 2)

// //example
 function addNumbers(num1, num2) {
   let sum = num1 + num2
   console.log(sum)
   }
 addNumbers(10, 20)


