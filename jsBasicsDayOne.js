
// Exercise 1: 
// Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. 
// Check that it works and is printet correctly.
function printName(firstName, lastName) {
    console.log(firstName + " " + lastName + "'s calculator");
}

// Exercise 2:
// Create a function that calculates the area of a rectangle. 
// The function should return the result. Test that it works.
function rectangleArea(sideA, sideB) {
    return sideA*sideB;
}

// Exercise 3:
// Create a function that takes speed and time as 2 parameters and calculates and returns the distance. 
// Use the function to test that it works by using the 'log' again. 
// Print out "You have travelled *x* km" where *x* is replaced by the result from the function.
console.log("----------------")
console.log("Distance Calculation")
console.log(" ")


function distanceCalculation(speed, time) {
    return speed*time;
}

console.log("You have travelled " + distanceCalculation(10, 3) + " km");

// Ex. 4:
// Create an object called calculator with the name of the owner (eg. Your name) 
// and modify your code so the 3 previous functions are attached to the object.
console.log("----------------")
console.log("Exercise Calculator")
console.log(" ")

var calculator = {
    name: printName,
    calculateArea: rectangleArea,
    calculateDistance: distanceCalculation
}

calculator.name("Matej", "Rolko")
console.log(calculator.calculateArea(5, 11))
console.log(calculator.calculateDistance(7, 3))

// Exercise Class - Cats
console.log("----------------")
console.log("Exercise Cats")
console.log(" ")

class Cat {
    constructor(name, color, breed) {
        this.name = name,
        this.color = color,
        this.breed = breed
    }

    displayData() {
        console.log("Cat: " + this.name + ", color: " + this.color + ", breed: " + this.breed)
    }

    changeName(name) {
        this.name = name;
        console.log("Changed cat's name to " + this.name)
    }
}

let cat = new Cat("Molly", "blue", "Bombay")
cat.displayData()
cat.changeName("Bobby")
cat.displayData

// Exercise Car
console.log(" ")
console.log(" * Exercise Car *") 
console.log(" ")

class Car {
    constructor(make,model,year) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.isRunning = false
    }

    getCarInfo() {
        return this.make + " " + this.model + " " + this.year
    }

    start() {
        this.isRunning = true
        console.log("The car is running")
    }

    stop() {
        this.isRunning = false
        console.log("The car is stopped")
    }
}

let car1 = new Car("Toyota", "Masterline", 2019)
console.log(car1.getCarInfo())
car1.start()
car1.stop()
let car2 = new Car("Škoda", "Fabia", 2007)
console.log(car2.getCarInfo())
car2.stop()
car2.start()

// Arrays
let numbers = [1,2,3,4,5,6];
numbers.push(586)
console.log(numbers)

// 0 means, start from the first position and 2, means take 2 elements.
numbers.slice(0,3); 

let people = []; 
people.push({firstname: 'Christian', lastname: 'Kirschberg', email: 'kirs@cphbusiness.dk '});
people.push({firstname: 'Mathias', lastname: 'Nielsen', email: 'mtnl@cphbusiness.dk'});
const email = people[0].email;

// Exercise Arrays
let names = ["Matej Rolko", "Ivan Rovný", "Mads Bergen", "Mette Frederiksen", "Kristoffer Lakt"]
console.log(names.indexOf("Matej Rolko"))
console.log(names.indexOf("x"))
names.push("Max Oswald")
console.log(names)
names.slice(0,3)
console.log(names)

// Create 2 objects with firstname, lastname, email– values. 
// Add the two objects to a new array. 'log' the array to verify. 
// Also 'log' the first objects' email in a separate 'log'.

let person1 = {
    firstName: "Peter",
    lastName: "Smith",
    email: "p.smith@email.com"
}

let person2 = {
    firstName: "George",
    lastName: "Rollin",
    email: "g.rollin@email.com"
}

let persons = [];
persons.push(person1, person2);
console.log(persons)
console.log(persons[0].email)

//Exercise Students
class Student {
    constructor(id, name) {
        this.id = id,
        this.name = name,
        this.grades = []
    }

    addGrade(grade) {
        this.grades.push(grade)
    }

    updateName(name) {
        this.name = name
    }
}

let student1 = new Student(1, "John Snow")
student1.addGrade(4)
student1.addGrade(1)
console.log(student1)
student1.updateName("Peter Snow")
console.log(student1)