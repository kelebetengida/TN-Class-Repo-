///////////////////////////////////////////////Welcome To Arrays///////////////////////////////
///////////////////////////////////////////Non-primitive data type/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// How to create an empty array. 
// This the most recommended way to create an empty list. Here is a general syntax
// let arr=[]
// console.log(arr)



//////////////////////////////////////////////////////////////////////////////////////////////
// How to create an array with values
let arr=["Denmark", "Swedan", "Norway", 7, 8, true, false, null, undefined, [ "banana", "orange"], {color:"blue", make:"Honda", awd:false}]
console.log("this is a random list of items:", arr)
console.log("This is how many are inside the arr list:", arr.length)

//.........................................To Do..............................................
//Create an array with values and then console log the list and its length  
// array of numbers
let num=[34,56,78,90,45,65]
console.log("list of numbers:", num)
console.log("number of numbers in my list", num.length)


// array of strings, fruits
let fruit=["banana", "Orange", "Tomamto"]
console.log("list of fruits:", fruit)
console.log("number of fruits in my list", fruit.length)

// array of web technologies


// /////////////////////////////////////////////////////////////////////////////////////////////
// Creating an array using split
let js = 'JavaScript'
const charOfJs=js.split("")
console.log(charOfJs)

//.........................................To Do..............................................
//For the two strings use a split method to conosole.log and see the list of arrays
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let newCompaniyString=companiesString.split(" ")
console.log(newCompaniyString)
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


// /////////////////////////////////////////////////////////////////////////////////////////////
//Accessing array items using index

const fruits = ['banana', 'orange', 'mango', 'lemon']
//index of Fruit////0/////////1////////2////////3////
let oneFruit=fruits[2]
console.log(oneFruit)

let lastIndex=fruits.length-1
console.log(fruits[lastIndex])

//.........................................To Do..............................................
//console how many are in  my shoping bag, just accsess and pring potato, Milk and sugar. Replace Avocado with Onion
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products

  let items=[shoppingCart[0],shoppingCart[3],shoppingCart[shoppingCart.length-1]]
  console.log(items)
shoppingCart[4]="onion"
console.log(shoppingCart)


//////////////////////////////////////////////////////////////////////////////////////////////
// Modifying array element
const numbers = [1, 2, 3, 4, 5]
/////////////////0//1//2
numbers[1]=12
console.log(numbers)



//////////////////////////////////////////////////////////////////////////////////////////////
// Methods to manipulate array

const numarr=[59,57,58,59,56]
numarr.shift()
console.log(numarr)





//Getting index an element in arr array (To check if an item exist in an array.)


//Getting index an element in arr array (To check if an item exist in an array.)