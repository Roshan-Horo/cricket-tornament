const express = require('express')
const TeamPool = require('../repos/team-repo')
const protect = require('../middlewares/authMiddleware')
const admin = require('../middlewares/adminMiddleware')

const router = express.Router()

// URL    - GET /teams
// ROUTES - PROTECTED 
// DESC   - get all teams
router.get('/', protect, async (req,res) => {
    const teams = await TeamPool.find()
    
    res.send(teams);
})

// URL    - GET /teams/:id/info
// ROUTES - PROTECTED 
// DESC   - get information about particular team
router.get('/:id/info', protect, async (req,res) => {
    const { id } = req.params

    const team = await TeamPool.findById(id)

    res.send(team)
})

// URL    - GET /teams/:id/players
// ROUTES - PROTECTED 
// DESC   - get all players of a particular team
router.get('/:id/players', protect, async (req,res) => {
    const { id } = req.params

    const players = await TeamPool.teamPlayers(id)

    res.send(players)
})
module.exports = router