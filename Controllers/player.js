const { Player, Team } = require('../models')

const createPlayer = async (req, res) => {
  let team = await Team.findById(req.params.id)
  let playerBody = { ...req.body, team: req.params.id }
  let newPlayer = await Player.create(playerBody)

  team.player.push(newPlayer._id)
  team.save()
  res.send(newPlayer)
}
