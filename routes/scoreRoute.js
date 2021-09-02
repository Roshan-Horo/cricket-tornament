const express = require('express')
const ScorePool = require('../repos/score-repo')
const protect = require('../middlewares/authMiddleware')
const admin = require('../middlewares/adminMiddleware')

const router = express.Router()

// URL    - GET /scores
// ROUTES - PROTECTED 
// DESC   - get scoreboard
router.get('/', protect, async (req,res) => {
    const matches = await ScorePool.scoreBoard()
    
    res.send(matches);
})


module.exports = router
