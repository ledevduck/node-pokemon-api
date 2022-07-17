const express = require('express')

const app = express()
const port = 3000

// first endpoint
// method get(firstArg, secondArg)
// firstArg: rest API default route (empty url)
// secondArg: function(req,res), returns response to client when calling endpoint
// req: entry endpoint request object
// res: response object returning from express to client
// send method from response object to return 'Hello' message to client
app.get('/', (req,res) => res.send('Hello'))

app.listen(port, () => console.log(`App started on: http://localhost:${port}`))