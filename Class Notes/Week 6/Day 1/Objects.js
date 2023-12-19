//📔  Object

// Creating an empty object

const person={
    hight:"short",
    eyeColor:"Brown",
    hairColor:"Black",
    age:45,
    isMaried:false,
    // Creating object methods
    introduce:function(){
        return `Hi I am a ${this.hight} guy with a ${person.eyeColor} eyecolor.`
    }
}

console.log(person.introduce())
const Kelebet={
    // Creating an objecting with values
    jobTitle:"Coding instructor",
    greatAtSpelling: false, 
    eyeColor:"Brown",
    age:26,
    skills:["HTML", "CSS", "JS", "Python", "React", "Node", "Express", "MangoDB"],
    canSwim:null,
    canDrive:true,
    Honda:{
        color:"Green",
        make:"Accord",
    },
    // Creating object methods
    introduce:function(){
        return `Hi I am Kelebet. I am a ${this.jobTitle}. I can drive a honda ${this.Honda.make}. The color is ${this.Honda.color}. `
    }
}



console.log(Kelebet.introduce())

// Getting values from an object


console.log(Kelebet)
//Dot notation
console.log(Kelebet.age)
//Bracket Notation
console.log(Kelebet["age"])

// console.log(Kelebet.jobTitle)
// console.log(Kelebet.skills)
console.log(Kelebet.Honda.color)
console.log(Kelebet["Honda"]["color"])


// Setting new key for an object
// Object Methods
// Getting object keys using Object.keys()
// Getting object values using Object.values()
// Getting object keys and values using Object.entries()
// Checking properties using hasOwnProperty()

//..........................................To Do............................................
// Create an empty object called dog
const dog={
    name:"Spike",
    legs:3.5,
    color:"Black",
    age:14,
    bark:function(){
        return `Woof Woof`
    }
}

console.log(dog.bark())

const dog2={
    name:"Moca",
    legs:4,
    color:"Brown",
    age:5,
    bark:function(){
        return `Woaf Woaf`
    }
}
console.log(dog2.bark())

console.log(dog["color"])
console.log(dog2.color)

// Print the the dog object on the console



// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof



// Get name, legs, color, age and bark value from the dog object