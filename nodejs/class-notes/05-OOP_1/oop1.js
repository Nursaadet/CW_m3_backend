"use strict"
/* -------------------------------------------------------
    OOP-1: OBJECTS
------------------------------------------------------- */

// Direkt obje isimlendirmede PascalCase veya camelCase yapı kullanırız.:
const exampleObject = {

    propertyName: 'value', // property, attribute, field
    propertyArray : [],
    propertyObject: {},

    // Obje içindeki fonsiyonlara Method denir:
    methodName: function () {
        return 'this is a method'
    },
    
    // Alternatif yazım:
    methodAlternative () {
        return 'method-2'
    },

}
// Nokta notasyonu ile property çağırlabilir:
console.log( exampleObject.propertyName )
console.log( exampleObject.methodName() )

/* ------------------------------------------------------- */




/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
