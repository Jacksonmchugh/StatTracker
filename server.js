const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { Team, Player } = require('./models')

const PORT = process.env.PORT || 3001
const app = express()
// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//  team controllers
app.get('/teams', async (req, res) => {
  const teams = await Team.find({})
  res.json(teams)
})
app.get('/teamform', async (req, res) => {
  let teamform = await Team.find({})
  res.send(teamform)
})
app.post('/teamform', async (req, res) => {
  let newTeam = await Team.create(req.body)
  res.send(newTeam)
})
// player controllers
app.get('/players', async (req, res) => {
  const players = await Player.find({})
  res.json(players)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
