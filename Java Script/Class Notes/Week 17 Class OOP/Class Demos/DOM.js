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
    constructor(color, types, taste, size) {
        this.color = color
        this.types = types
        this.taste = taste
        this.size = size
        // Properties with initial value
        this.count=0
        this.location=[]

    }
    // Default values with constructor
    // constructor(color="red", types"Honey Crisp", taste="Sweet", size="small") {
    //     this.color = color
    //     this.types = types
    //     this.taste = taste
    //     this.size = size
    // }
    
    // Class methods
    get apleType(){
        const name= this.types
        return name
    }
    // getter
    get getAppleCount(){
        return this.appleCount
    }
    get getAppleLocation(){
        return this.location
    }
    // setter
    set appleCount(count){
        this.count+=count
    }
    set appleLocation(location){
        this.location.push(location)
    }
}

const apple1 = new Apples("red", "Golden Delicious", "Mid Sweet", "small")
const apple2 = new Apples("redGold MIx", "Fuji", "Sweet", "Large")
apple1.appleCount=8
apple1.appleLocation="Atlanta"
apple2.appleLocation="Nashvil"
apple2.appleLocation="Chatnooga"

apple2.appleCount=3
console.log(Apples)
console.log(apple1)
console.log(apple2)





// Static method
// Inheritance
// Overriding methods