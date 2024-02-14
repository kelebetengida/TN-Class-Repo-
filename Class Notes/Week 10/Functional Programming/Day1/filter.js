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