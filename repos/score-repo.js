const pool = require('../config/pool')
const toCamelCase = require('./utils/to-camel-case')

class ScorePool {

    static async scoreBoard(){
        const { rows } = await pool.query(`
        SELECT teams.short_name,teams.full_name,scoreboard.score,
        (SELECT COUNT(*) FROM matches WHERE winner = teams.id) AS winning,
        (SELECT COUNT(*) FROM matches WHERE looser = teams.id) AS loosing,
        ((SELECT COUNT(*) FROM matches WHERE winner = teams.id) 
          +
         (SELECT COUNT(*) FROM matches WHERE looser = teams.id) 
        ) AS total_matches,
        scoreboard.crr
        FROM scoreboard
        JOIN teams ON scoreboard.team_id = teams.id
        ORDER BY 
            scoreboard.score DESC,
            scoreboard.crr DESC;
        
        `)

        return toCamelCase(rows)
    }
    
}

module.exports = ScorePool
