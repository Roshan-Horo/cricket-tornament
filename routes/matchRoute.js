const express = require('express')
const MatchPool = require('../repos/match-repo')
const protect = require('../middlewares/authMiddleware')
const admin = require('../middlewares/adminMiddleware')

const router = express.Router()

// URL    - GET /matches
// ROUTES - PROTECTED
// DESC   - GET ALL MATCHES
router.get('/', protect, async (req,res) => {
    const matches = await MatchPool.find()
    
    res.send(matches);
})

// URL    - POST /matches
// ROUTES - PROTECTED , ADMIN
// DESC   - create a match
router.post('/', protect, admin, async (req,res) => {
    const { team_1, team_2, venue, winner, looser, manOfTheMatch, bowlerOfTheMatch, bestFielder, crr } = req.body

    const matchData = {
         team_1: parseInt(team_1),
         team_2: parseInt(team_2),
         venue: parseInt(venue),
         winner: parseInt(winner),
         looser: parseInt(looser),
         manOfTheMatch: parseInt(manOfTheMatch),
         bowlerOfTheMatch: parseInt(bowlerOfTheMatch),
         bestFielder: parseInt(bestFielder),
         crr: parseFloat(crr)
    }
    const match = await MatchPool.createMatch(matchData)

    res.json("match created")
})

// URL    - GET /matches/result
// ROUTES - PROTECTED 
// DESC   - match result
router.get('/result',protect, async (req,res) => {
    const matches = await MatchPool.matches()
    
    res.send(matches);
})


// URL    - GET /matches/:id
// ROUTES - PROTECTED 
// DESC   - get match by id
router.get('/:id', protect, async (req,res) => {
    const { id } = req.params

    const match = await MatchPool.findById(id)

    res.send(match)
})


module.exports = router
