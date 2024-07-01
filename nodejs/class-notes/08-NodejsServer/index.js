"use strict"
/* -------------------------------------- *

        NODEJS

/* -------------------------------------- */
/* -------------------------------------- */
// HTTPSERVER:

const http = require('node:http') // BuiltIn Module.

/* -------------------------------------- */
// http.createServer( (request, response) => { ... } )
const app = http.createServer((request, response) => {

        response.end('Hello World')
        console.log('Console Print')
    
    })