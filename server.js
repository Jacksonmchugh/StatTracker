const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { Team } = require('./models')

const PORT = process.env.PORT || 3001
const app = express()
// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// controllers
app.get('/teams', async (req, res) => {
  const teams = await Team.find({})
  console.log('teams')
  console.log(teams)
  res.json(teams)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
