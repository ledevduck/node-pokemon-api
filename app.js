const express = require('express')
const helper = require('./helper')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello again'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokémon a bien été trouvé'
    res.json(helper.success(message, pokemon))
})

app.get('/api/pokemons', (req,res) => {
    res.send(`Il y a ${pokemons.length} pokémons`)
})

app.listen(port, () => console.log(`App started on: http://localhost:${port}`))
