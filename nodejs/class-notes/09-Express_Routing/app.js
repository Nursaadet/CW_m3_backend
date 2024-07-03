"use strict"
/* ----------------------------------------------- *

    NODEJS EXPRESS & ROUTINGS

/* ----------------------------------------------- */
// https://expressjs.com/
// $ npm i express dotenv

const express = require('express')
const app = express()

// http.createServer((req, res) => {
//     if (req.url = '/') {
//         if (req.method == 'GET') {
//         } else {
//         }
//     } else if (req.url = '/second') {
//     }
// })

// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */