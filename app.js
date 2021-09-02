// IMPORT MODULES
const express = require('express')
const teamsRouter = require('./routes/teamsRoute')
const playersRouter = require('./routes/playersRoute')
const venueRouter = require('./routes/venueRoute')
const matchRouter = require('./routes/matchRoute')
const scoreRouter = require('./routes/scoreRoute')
const userRouter = require('./routes/userRoute')
const cors = require('cors')

module.exports = () => {
    const app = express()

    
    // CONFIRGURATION AND MIDDLEWARES
    app.use(express.json())
    app.use(cors())

    // Routes Middlewares
    app.use('/teams', teamsRouter)
    app.use('/players', playersRouter)
    app.use('/venues', venueRouter)
    app.use('/matches', matchRouter)
    app.use('/scores', scoreRouter)
    app.use('/users', userRouter)

    // routes
    app.get('/', (req,res) => {
        res.send('API is running...')
    })

    return app;
}