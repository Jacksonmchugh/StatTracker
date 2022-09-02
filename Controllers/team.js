const { Team } = require('../models')

const getAllTeams = async (req, res) => {
  let teams = await Team.find({}).populate('players')
  res.send(teams)
}

const createTeam = async (req, res) => {
  let createTeam = await Team.create(req.body)
  res.send(createTeam)
}

const getOneTeam = async (req, res) => {
  let foundTeam = await Team.findById(req.params.id).populate('players')
  res.send(foundTeam)
}

const deleteTeam = async (req, res) => {
  let deleteTeam = await Team.findByIdAndDelete(req.params.id)
  res.send(deleteTeam)
}

module.exports = {
  getAllTeams,
  createTeam,
  getOneTeam,
  deleteTeam
}
