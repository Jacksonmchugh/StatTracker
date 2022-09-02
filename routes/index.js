const { Router } = require('express')
const router = Router()
const { teams, players, stats } = require('../controllers')

// team routes
router.get('/teams', teams.getAllTeams)
router.post('/teams', teams.createTeam)
router.get('/teams/:id', teams.getOneTeam)
router.post('/teams/:id/players', players.createPlayer)
// player routes
router.get('/players', players.getAllPlayers)
router.get('/player/:id', players.getPlayer)
router.put('/players/:id', players.updatePlayer)
router.delete('/players/:id', players.deletePlayer)
// stat routes

module.exports = router
