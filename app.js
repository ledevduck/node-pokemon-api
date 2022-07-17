const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello again'))

app.get('/api/pokemons/1', (req,res) => res.send('Hello Pokemon1'))

app.listen(port, () => console.log(`App started on: http://localhost:${port}`))