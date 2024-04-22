//Sometimes you may need to take an array and apply some procedure to its elements so that you get 
//a new array with modified elements.

//The Array.map() method allows you to iterate over an array and modify its elements using 
//a callback function. The callback function will 
//then be executed on each of the array's elements
//for example, suppose that you have the following array
let arr = [3, 4, 5, 6];

//Now imagine you are required to multiply each of the array's elements by 3.
// You might consider using a for loop as follows:
let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]

//But you can actually use the Array.map() method to achieve the same result. 
//Here's an example:

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]


//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.
//A Map has a property that represents the size of the map

//creating an empty map
const map = new Map()
console.log(map)

//creating a map from an array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)


  //Adding values to a map
  const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//getting values from a map
console.log(countriesMap.get('Finland'))

//checking key in a map
//Check if a key exists in a map using has method. It returns true or false.

console.log(countriesMap.has('Finland'))

//getting all values from a map using a loop
for (const country of countriesMap) {
    console.log(country)
  }

  (2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]



for (const [country, city] of countriesMap){
    console.log(country, city)
   }

   Finland Helsinki
Sweden Stockholm
Norway Oslo