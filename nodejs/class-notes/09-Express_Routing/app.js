"use strict"
/* ----------------------------------------------- *

    NODEJS EXPRESS & ROUTINGS

/* ----------------------------------------------- */
// https://expressjs.com/
// $ npm i express dotenv

const express = require('express')
const app = express()

/* ----------------------------------------------- *
// http.createServer((req, res) => {
//     if (req.url = '/') {
//         if (req.method == 'GET') {
//         } else {
//         }
//     } else if (req.url = '/second') {
//     }
// })

app.get('/', (req, res) => {
    // res.end('app.get çalıştı')
    // const obj = {
    //     error: false,
    //     message: 'Welcome'
    // }
    // res.end(JSON.stringify(obj))

    // SEND METHOD:
    // res.send('Welcome to World')
    // res.send({
    //     error: false,
    //     message: 'Welcome'
    // })
    // res.send([0, 1, 2])

    // STATUS METHOD:
    // res.status(404)
    // res.send({
    //     error: false,
    //     message: 'Page Not Found'
    // })

    // Output:
    res.status(404).send({
        error: false,
        message: 'Page Not Found'
    })
    
})
app.post('/', (req, res) => {
    res.end('app.post çalıştı')  
})
app.put('/', (req, res) => {
    res.end('app.put çalıştı')  
})
app.delete('/', (req, res) => {
    res.end('app.delete çalıştı')  
})
/* ----------------------------------------------- */

// app.get('/', (req, res) => { res.end('app.get çalıştı')})
// app.post('/', (req, res) => { res.end('app.post çalıştı')})
// app.put('/', (req, res) => { res.end('app.put çalıştı')})
// app.delete('/', (req, res) => { res.end('app.delete çalıştı')})

// ALL METHOD:
// app.all('/', (req, res) => { res.end('app.all çalıştı')})

// ROUTE METHOD:
// app.route('/')
//     .get((req, res) => { res.end('app.get çalıştı')})
//     .post((req, res) => { res.end('app.post çalıştı')})
//     .put((req, res) => { res.end('app.put çalıştı')})
//     .delete((req, res) => { res.end('app.delete çalıştı')})

/* ----------------------------------------------- */
// URL (path) Options:

app.get('/', (req, res) => { res.send('burası anasayfa')}) // / == Anasayfa (home path)
app.get('/path', (req, res) => { res.send('burası "path" sayfası')}) // "/path" == "/path/"

// Express Joker karakterleri destekler: (RexExp kuralları ile aynı)
// app.get('/abc(x?)123', (req, res) => { res.send('now in here: /abc(x?)123')}) // abc123 == abcx123
// app.get('/abc(x+)123', (req, res) => { res.send('now in here: /abc(x+)123')}) // abcx..x123
// app.get('/abc123(x+)', (req, res) => { res.send('now in here: /abc123(x+)')}) // abcx..x123
// app.get('/abc*123', (req, res) => { res.send('now in here: /abc*123')}) // abc123 == abc(ANY)123

// Express RegularExpression destekler:
// app.get(/xyz/, (req, res) => { res.send('now in here: /xyz/')}) // içinde xyz geçen url'yi kabul et.
// app.get(/xyz$/, (req, res) => { res.send('now in here: /xyz$/')}) // xyz ile biten url'yi kabul et.
// app.get(/^\/xyz/, (req, res) => { res.send('now in here: /^\/xyz/')}) // xyz ile biten url'yi kabul et.

/* ----------------------------------------------- */
// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */