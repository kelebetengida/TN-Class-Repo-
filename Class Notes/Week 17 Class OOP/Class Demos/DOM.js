// Lets Create different objects
//DRY => Do not repeat your self
//Fruits Object
const apples1 = {
    color: "red",
    types: "Golden Delicious",
    taste: "Mid Sweet",
    size: "small"
}

const apples2 = {
    color: "redGold MIx",
    types: "Fuji",
    taste: "Sweet",
    size: "Large"
}

const apples3 = {
    color: "Pink ",
    types: "Pink Lady",
    taste: "sweet",
    size: "Midium"
}

// Classes
// Class Instantiation
// Defining a classes
// class Name{
// }

class Apples {
    // Class Constructor
    constructor(color, types, taste, size){
        this.color=color
        this.types=types
        this.taste=taste
        this.size=size
    }

}

const apple1 = new Apples("red","Golden Delicious","Mid Sweet","small")
const apple2 = new Apples("redGold MIx","Fuji","Sweet","Large")
console.log(apple1)
console.log(apple2)




// Default values with constructor
// Class methods
// Properties with initial value
// getter
// setter
// Static method
// Inheritance
// Overriding methods