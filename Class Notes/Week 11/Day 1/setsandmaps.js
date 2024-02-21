//Set is a collection of elements. Set can only contains unique elements. 
//Let us see how to create a set in the section below.

//You can create a Javascript set by
  //Passing an Array to new Set()
  //Create a new Set and use add() to add values
  //Create a new Set and use add() to add variables


//Creating an empty set
const companies = new Set()
console.log(companies)

Set(0) {}

//Creating a set from an array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)


//Set is an iterable object and we can iterate through each elements.
  const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  
  for (const language of setOfLanguages) {
    console.log(language)
  }