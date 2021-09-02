const app = require('./app')
const pool = require('./config/pool')
require('dotenv').config()

const PORT = process.env.PORT || 3005

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     port: process.env.PG_PORT
// }


const devConfig = {
    connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
}

const prodConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
}

pool.connect(process.env.NODE_ENV === 'production' ? prodConfig : devConfig) 
.then( () => {
app().listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
})
.catch(err => console.error(err))


