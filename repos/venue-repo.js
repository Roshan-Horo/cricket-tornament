const pool = require('../config/pool')
const toCamelCase = require('./utils/to-camel-case')

class VenuePool {
    static async find(){
        const {rows} = await pool.query('SELECT * FROM venues;')

        return toCamelCase(rows)
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT * FROM venues WHERE id = $1',[id])

        return toCamelCase(rows)[0]
    }

    
}

module.exports = VenuePool
