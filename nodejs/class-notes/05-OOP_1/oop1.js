"use strict"
/* -------------------------------------------------------
    OOP-1: OBJECTS
------------------------------------------------------- */

// Direkt obje isimlendirmede PascalCase veya camelCase yapı kullanırız.:
// const exampleObject = {

//     propertyName: 'value', // property, attribute, field
//     propertyArray : [],
//     propertyObject: {},

//     // Obje içindeki fonsiyonlara Method denir:
//     methodName: function () {
//         return 'this is a method'
//     },
    
//     // Alternatif yazım:
//     methodAlternative () {
//         return 'method-2'
//     },

// }
// // Nokta notasyonu ile property çağırlabilir:
// console.log( exampleObject.propertyName )
// console.log( exampleObject.methodName() )

/* ------------------------------------------------------- *
//* Object Declaration:

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: [ 'red', 'white' ],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    }

}

// console.log( Car.brand )
// console.log( Car.colors[1] )
// console.log( Car.details.engineSize )
// console.log( Car.startEngine() )
// console.log( Car.startEngine('2') )

// Alternatif:
console.log( Car['brand'] )
console.log( Car['colors'][1] )
console.log( Car['details']['engineSize'] )
console.log( Car['startEngine']() )

/* ------------------------------------------------------- *
//* "THIS" Keyword:

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: [ 'red', 'white' ],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    },
    getDetails: function() {
        console.log( this )
        // return this.details
        // return this.startEngine()
        return this.brand + ' ' + this.model + ' ' + this.year + ' ' + this.startEngine()
    },
    arrowMethod: () => {
        //* Arrow function is globalScope. (Not working this keyword in here)
        console.log( this )
    }

}

console.log( Car.getDetails() )
console.log( Car.arrowMethod() )

/* ------------------------------------------------------- */
//* ARRAY DESTRUCTURING:

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

// const test0 = testArray[0]
// const test1 = testArray[1]
// const test2 = testArray[2]
// // const test3 = testArray[3]
// // const test4 = testArray[4]
// const testPart = testArray.slice(3)
// console.log(test0, test1, test2, testPart)

// Sıralama Önemli:
// const [var0, var1, ...varPart] = testArray
// console.log(var0, var1, varPart)

// REST Operator (Toplayıcı) (Eşitir ifadesinin sol tarafındaki REST operatördür.)
const [var0, var1, ...varPart] = testArray
console.log(var0, var1, varPart)

// SPREAD Operator (Dağıtıcı/Serpiştirici) (Eşitir ifadesinin sağ tarafındaki SPREAD operatördür.)
const newArr = [ ...testArray, 'value5', 'value6' ]
console.log( newArr)

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */