"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

// Middleware:
app.get('/', (req, res, next) => {

    console.log('middleware çalıştı.')

    // next işlemi bir sonraki route'a havale eder.
    // next()
    // next bir sonraki route gideceği için sonrasının bir önemi yok.
    // res.send({
    //     message: 'middleware'
    // })

    if (req.query.courseName == 'clarusway') {
        next()
    } else {
        res.send({
            message: 'Kurs ismi yanlış girildi.'
        })
    }

})

// Route-Path:
app.get('/', (req, res) => {

    console.log('route-path çalıştı.')

    res.send({
        message: 'Hello World'
    })

})

/* ------------------------------------------------------- */
