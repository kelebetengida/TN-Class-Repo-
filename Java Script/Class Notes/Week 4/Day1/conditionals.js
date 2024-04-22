/////////////////////////////////////Conditional statments///////////////

// Consitional statments are statmets or decision based on different conditions.
//By default js analyzes our code sequentialy so that there is flow in out page. 

/////if/////////////////////////////////////////////////////////////

//syntax
// if(condition){
//     //this is the part your truthy or falsy statment . 
// }

// let number=-1;
// if(number<0){
//     console.log(true)
// }

/////////////////if else ////////////////////////////////////////

// if(condition){
//     //this is the part your truthy or falsy statment . 
// } else{ 
//     //this is the part your truthy or falsy statment . 
// }

// let number=-1;
// if(number<0){
//     console.log(true)
// }else {
//     console.log(false)
// }


////////if esle if else /////////////////////////////////////////

// if(condition){
// 
    //code to returen first truthy 
// } else if(condition){
//     //code to returen a secound truthy value 
// }else {
//     // code to returen falsy value 
// }

// let weather =prompt("What Weather do you want?");

// if(weather==="rainy"){
//     console.log("you need to to wear a coat")
// }else if(weather==="cloudy"){
//     console.log("bring a jacket it might be cold today")
// }else if(weather==="sunny"){
//     console.log("you need to wear shorts")
// }else {
//     console.log("no need for a coat ")
// }


/////////////////////////////////////////////////////Switch////////////////////////////////////////////////////////////

// switch(caseValue){
//     case 1:
//         //code
//         break
//     case 2:
//         //code
//         break
//     case 3:
//         //code
//         break
//     case 4:
//         //code
//         break
// }


// switch(weather){
//     case "rainy":
//     case "windy":
//     case "Snowy":    
//         console.log("you need a rain coat")
//         break
//     case "sunny":
//         console.log("you need to wear shorts")
//         break
//     case "cloudy":
//         console.log("bring a jacket it might be cold today")
//         break
//     default:
//         console.log("no need for a coat ")
// }



////////////////////////////////////////Ternary Operators//////////////////////////////////
//Another way to write conditionals is using ternary operators. 
//Ternary operator allows to write a condition.

let isRaining=false;

isRaining
    ? console.log("you need a rain coat")
    : console.log("No need for a rain coat")

//Loops
//In programming languages to carry out repetitive task we use different kinds of loops. 
//The following examples are the commonly used loops in JavaScript and other programming 
//languages.

// For loop structure
//for(initialization, condition, increment/decrement){
    // code goes here
 // }

  //example
  for(let i = 0; i <= 5; i++){
    console.log(i)
  }
  
  // 0 1 2 3 4 5

//adding numbers in an array 
//   const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//   sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

//}
console.log(sum)  // 15

//while loop
// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// 0 1 2 3 4 5

//do while loop

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5

//for of loop
//We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested 
//in the index of each element in the array
//basic syntax
for (const element of arr) {
    // code goes here
  }

  //example
  
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

for (let i = 2; i <=22; i+2) {
    console.log(i)
}









