// get express
const express = require('express')

// express application instance, web server hosting rest API
const app = express()
// rest API will start on this port
const port = 3000

// first endpoint
app.get('/', (req,res) => res.send('Hello'))

// start rest API on port, and display message in console with listen method from express
app.listen(port, () => console.log(`App started on: http://localhost:${port}`))