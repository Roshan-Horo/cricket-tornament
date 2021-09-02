const express = require('express')
const UserPool = require('../repos/user-repo')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/jwtGen')

const router = express.Router()

router.post('/signup', async (req,res) => {
    try {
    // destructure req.body
    const { name, email, password} = req.body

    // check the email if already exists
    const user = await UserPool.findByEmail(email)

    if(user && user.length === 1){
       return  res.status(400).send('User already exists')
    }

    // hash the password
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const userData = {
        name,
        email, 
        bcryptPassword
    }

    // save to db
    const newUser = await UserPool.signup(userData)
 
    // generate token and send
    const token = generateToken(newUser.id)

    res.json({ token })
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

router.post('/signin', async (req,res) => {
    try {
        // destructure req.body
       const {email, password} = req.body
       
       // check if email exists

       const user = await UserPool.findByEmail(email)

       if(user && user.length === 0){
           return res.status(401).json("Password or Email is Incorrect")
       }

       // check if password is correct 
       const validPassword = await bcrypt.compare(password, user[0].password)

       if(!validPassword){
           res.status(400).json("password or email is Incorrect")
       }

       // give the jwt token
       
       const token = generateToken(user[0].id)

       res.json({ token })
       
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
        
    }
})

module.exports = router
