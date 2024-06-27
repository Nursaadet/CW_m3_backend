"use strict"
/* -------------------------------------------------------
    OOP: CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.
/* ------------------------------------------------------- *
//* Class Declaration:

// Class isimleri PascalCase yapıdadır:
// class PascalNameCase { ... }

//* Class Expression:

const PascalNameCase = class {

    undefinedProperty // sadece tanımlanıp bırakılabilir. (değeri undefined)
    propertyName = 'value' // attribute, field

    // method tanımlarken başına function yazılmaz:
    methodName() {
        return 'this is a method'
    }
    // Aşağıdaki yöntem class içinde kullanılmaz:
    // methodName = function() {}
}

//? INSTANCE = Bir class'tan türetilen objedir.
//? Intance isimleri de PascalCase yapıdadır.
const NewObj = new PascalNameCase()
console.log(NewObj)
console.log(NewObj.methodName())

/* ------------------------------------------------------- *
//* Contructor Method:

class Car {

    isRunning = false

    // ? "new Class" ile obje oluştururken parametre göndermek için "constructor" isminde bir method kullanırız.
    constructor(brand, model, year = 2000) {

        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }

    newMethod() {
        this.runEngine()
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)
// Ford.newMethod()
console.log(Ford.isRunning)
Ford.runEngine()
console.log(Ford.isRunning)

const Mercedes = new Car('Mercedes', 'CLK300', 2020)
console.log(Mercedes)
const Renault = new Car('Renault', 'Megane', 2010)
console.log(Renault)

/* ------------------------------------------------------- */
//* INHERITANCE = MirasAlma. Başka bir classın tüm property/methodlarını devralma (parent-child kurulur.)
//* SUPER = Parent Class, THIS = Child (Current) Class

class Vehicle {

    vehicleIsActive = false
    vehicleIsActive2 = false
    vehicleIsActive3 = false
    vehicleIsActive4 = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle {

    isRunning = false

    // constructor(brand, model, year = 2000) {
    //     super('Car')
    //     this.brand = brand
    //     this.model = model
    //     this.year = year
    // }

    constructor(brand, model, year, vehicleType) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }
}

// class Truck extends Vehicle { ... }

// const Mercedes = new Car('Mercedes', 'CLK300', 2020)
// console.log(Mercedes)
// const Mercedes = new Car('Mercedes', 'CLK300', 2020, 'Car')
// console.log(Mercedes)

class Accessory extends Car {

    constructor(accessoryName, brand, model, year, vehicleType) {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }

}

// const BoshClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'Car')
// console.log( BoshClimate)

const Mercedes = new Car('Mercedes', 'CLK300', 2020, 'Car')
console.log( Object.values(Mercedes))
const BoshClimate = new Accessory('Bosh Climate', ...Object.values(Mercedes))
console.log( BoshClimate)

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */