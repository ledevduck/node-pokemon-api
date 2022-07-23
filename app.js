const express = require("express")
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const { success, getUniqueId } = require("./helper")
let pokemons = require("./mock-pokemon")

const app = express()
const port = 3000

app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())

app.get("/", (req, res) => res.send("Hello"))

app.get("/api/pokemons", (req, res) => {
  const message = "Liste de pokémons récuperée"
  res.json(success(message, pokemons));
});

app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "Un pokémon a bien été trouvé";
  res.json(success(message, pokemon))
});

app.post('/api/pokemons', (req, res) => {
  const id = getUniqueId(pokemons)
  // Pb body string, not JSON
  const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
  pokemons.push(pokemonCreated)
  const message = `Le pokemon ${pokemonCreated.name} a bien été créé.`
  res.json(success(message, pokemonCreated))
})

app.listen(port, () => console.log(`App started on: http://localhost:${port}`))
