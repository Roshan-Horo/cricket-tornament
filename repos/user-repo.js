const pool = require('../config/pool')
const toCamelCase = require('./utils/to-camel-case')

class UserPool {
    static async findByEmail(email){
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1;',[ email])

        return rows
    }

    static async signup(data){
        const { rows } = await pool.query(`
        INSERT INTO users(name,email,password)
        VALUES
            ($1,$2,$3) RETURNING *;
        `,[data.name, data.email, data.bcryptPassword]) 

        return toCamelCase(rows)[0]
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT name, email, is_admin FROM users WHERE id = $1',[id])

        return toCamelCase(rows)[0]
    }
    
}

module.exports = UserPool
