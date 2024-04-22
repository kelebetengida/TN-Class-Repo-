//Create different car objects

class Car{
    constructor(make, model, year, enginesize,brakesPrice, navigation){
        this.make=make
        this.model=model
        this.year=year
        this.brakesPrice=brakesPrice
        this.enginesize=enginesize
        this.navigation=navigation
    }
}
class Suv extends Car{
    constructor(make, model, year, enginesize,brakesPrice, navigation,awd, numberOfPassengers, towCampacity ){
        super(make, model, year, enginesize,brakesPrice, navigation)
        this.awd=awd
        this.numberOfPassengers=numberOfPassengers
        this.towCampacity=towCampacity
    }
}
const hondaPilot=new Suv("Honda", "Pilot", 2015, "V6", 455, true, true, 7, 50)

class PickupTruck extends Car{
    constructor(make, model, year, enginesize,brakesPrice, navigation, engineType, towCampacity){
        super(make, model, year, enginesize,brakesPrice, navigation)
        this.engineType=engineType
        this.towCampacity=towCampacity
    }
}
const f150=new PickupTruck("Ford", "f150", 2011, "V8", 500, true, "regular Engine", 1.5)









// Create an Animal class. The class will have name, age, color, legs properties and create different methods And Make sure to use a getter and setter





// Create a Dog and Cat child class from the Animal Class.