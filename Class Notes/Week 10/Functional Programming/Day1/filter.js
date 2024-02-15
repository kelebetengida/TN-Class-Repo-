//fileter:  Filters items which full fill filtering conditions and returns a new array

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Finland",
    "Ireland"
]

const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

//quick review of anonymous function & arrow functions
//An anonymous function is a function stored in a variable, this function does not
//have a name
//Example of an anymous function
const anonymousFun = function() {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
      )
    }


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