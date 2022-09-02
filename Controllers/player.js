const { Player, Team } = require('../models')
const { rawListeners } = require('../models/team')

const createPlayer = async (req, res) => {
  let team = await Team.findById(req.params.id)
  let playerBody = { ...req.body, team: req.params.id }
  let newPlayer = await Player.create(playerBody)

  team.player.push(newPlayer._id)
  team.save()
  res.send(newPlayer)
}

const getPlayer = async (req, res) => {
  let player = await Player.findById(req.params.id).populate('team')
  res.send(player)
}
const getAllPlayers = async (req, res) => {
  let allPlayers = await Player.find({})
  res.send(allPlayers)
}

const updatePlayer = async (req, res) => {
  let updatePlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(updatePlayer)
}

const deletePlayer = async (req, res) => {
  let deletePlayer = await Player.findByIdAndDelete(req.params.id)
  res.send(deletedPlayer)
}

module.exports = {
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers
}
