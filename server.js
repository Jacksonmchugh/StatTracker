const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { Team, Player } = require('./models')

const app = express()
// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

//  team controllers
app.get('/teams', async (req, res) => {
  const teams = await Team.find({})
  res.json(teams)
})
app.get('/teamform', async (req, res) => {
  let teamform = await Team.find({})
  res.send(teamform)
})
app.get('/teams/:id', async (req, res) => {
  let { id } = req.params
  const teamCard = await Team.findById(id)
  res.json(teamCard)
})
app.post('/teamform', async (req, res) => {
  let newTeamBody = {
    ...req.body
  }
  let newTeam = await Team.create(newTeamBody)
  res.send(newTeam)
})
app.put('/teams/:id', async (req, res) => {
  let updateTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(updateTeam)
})
app.delete('/teams/:id', async (req, res) => {
  let { id } = req.params
  const teamDetails = await Team.findByIdAndDelete(id)
  res.send(teamDetails)
})

// player controllers
app.get('/players', async (req, res) => {
  const player = await Player.find({})
  res.json(player)
})
app.post('/playerform', async (req, res) => {
  let newPlayer = await Player.create(req.body)
  res.send(newPlayer)
})
app.get('/players/:id', async (req, res) => {
  let { id } = req.params
  const playerCard = await Player.findById(id)
  res.json(playerCard)
})
app.put('/players/:id', async (req, res) => {
  let updatePlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(updatePlayer)
})
app.delete('/players/:id', async (req, res) => {
  let { id } = req.params
  const playerDetails = await Player.findByIdAndDelete(id)
  res.send(playerDetails)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
