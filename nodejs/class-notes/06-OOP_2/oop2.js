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

/* ------------------------------------------------------- */
// Contructor Method:

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
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */