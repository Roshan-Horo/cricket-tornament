const jwt = require('jsonwebtoken')
require('dotenv').config()
const UserPool = require('../repos/user-repo')

module.exports = async (req, res, next) => {
    try {
       const jwtToken = req.header("token");

       if(!jwtToken) {
           return res.status(401).json("Not Authorize")
       }

       const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

       req.user = await UserPool.findById(payload.id)
  
       next()
    } catch (error) {
        console.error(error.message);
        return res.status(401).json( "Not Authorize")
    }
}