const pool = require('../config/pool')
const toCamelCase = require('./utils/to-camel-case')

class PlayerPool {
    static async find(){
        const {rows} = await pool.query('SELECT * FROM players;')

        return toCamelCase(rows)
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT * FROM players WHERE id = $1',[id])

        return toCamelCase(rows)[0]
    }
}

module.exports = PlayerPool
