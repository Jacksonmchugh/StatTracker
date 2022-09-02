const mongoose = require('mongoose')
const teamSchema = require('./team')
const playerSchema = require('./player')
const statSchema = require('./stat')

const Team = mongoose.model('Team', teamSchema)
const Player = mongoose.model('Player', playerSchema)
const Stat = mongoose.model('Stat', statSchema)

module.exports = {
  Team,
  Player,
  Stat
}
