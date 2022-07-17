const express = require('express')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello again'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = req.params.id
    const pokemon = pokemons.find(pokemon => pokemon.id == id)
    res.send(`You asked for the pokemon ${pokemon.name}`)
})

app.listen(port, () => console.log(`App started on: http://localhost:${port}`))
