const express = require('express')
const VenuePool = require('../repos/venue-repo')
const protect = require('../middlewares/authMiddleware')
const admin = require('../middlewares/adminMiddleware')

const router = express.Router()

// URL    - GET /venues
// ROUTES - PROTECTED 
// DESC   - get all venues
router.get('/', protect,  async (req,res) => {
    const venues = await VenuePool.find()
    
    res.send(venues);
})

// URL    - GET /venues/:id
// ROUTES - PROTECTED 
// DESC   - get info about particular venue by (id)
router.get('/:id', protect,  async (req,res) => {
    const { id } = req.params

    const venue = await VenuePool.findById(id)

    res.send(venue)
})

module.exports = router
