const app = require('./app')
const pool = require('./config/pool')
require('dotenv').config()

const PORT = process.env.PORT || 3005

// const devConfig = {
//     user: 'postgres',
//     password: 'password',
//     host: '0.0.0.0',
//     database: 'cricket_tournament',
//     port: 5432
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


