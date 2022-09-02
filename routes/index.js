const { Router } = require('express')
const router = Router()
const { team, player, stat } = require('../controllers')

// team routes
router.get('/teams', teams.getAllTeams)
router.post('/teams', teams.createTeam)
router.get('/teams/:id', teams.getOneTeam)
router.post('/teams/:id/players', players.createPlayer)
// player routes

// stat routes
