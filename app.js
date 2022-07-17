const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello again'))

// :id in route path indicates it comes from client request
// get id from url (client request) and displays it in response
app.get('/api/pokemons/:id', (req,res) => {
    const id = req.params.id
    res.send(`You asked for the pokemon ${id}`)
})

app.listen(port, () => console.log(`App started on: http://localhost:${port}`))
