const express = require('express')
const PlayerPool = require('../repos/player-repo')
const protect = require('../middlewares/authMiddleware')
const admin = require('../middlewares/adminMiddleware')

const router = express.Router()

// URL    - GET /players
// ROUTES - PROTECTED 
// DESC   - get all players
router.get('/', protect, async (req,res) => {
    const players = await PlayerPool.find()
    
    res.send(players);
})

// URL    - GET /players/:id
// ROUTES - PROTECTED 
// DESC   - get player by id
router.get('/:id', protect,  async (req,res) => {
    const { id } = req.params

    const player = await PlayerPool.findById(id)

    res.send(player)
})

module.exports = router
