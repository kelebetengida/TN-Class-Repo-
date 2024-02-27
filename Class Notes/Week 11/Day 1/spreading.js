//When we destructure an array we use the spread operator(...) to get 
//the rest elements as array. In addition to that we use spread operator to 
//spread array elements to another array.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums
// ​
// console.log(num1, num2, num3)
// console.log(rest)

//Use a comma to omit the value you do not want to display; in this example
//Belgium will be omitted
const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  
  let [gem, fra, bel, ...nordicCountries] = countries
  
  console.log(gem, fra, bel)
  console.log(countries[0], countries[1], countries[2])
  console.log(fra)
  console.log(bel)
  console.log(nordicCountries)

  //Using the spread operator to copy an array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


//Using the spread operator to coopy an object
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)
