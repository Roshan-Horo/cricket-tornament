const pool = require('../config/pool')
const toCamelCase = require('./utils/to-camel-case')

class MatchPool {
    static async find(){
        const {rows} = await pool.query('SELECT * FROM matches;')

        return toCamelCase(rows)
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT * FROM matches WHERE id = $1',[id])

        return toCamelCase(rows)[0]
    }

    static async matches(){
        const { rows } = await pool.query(`
        SELECT matches.id AS match_id,teams.short_name AS winner, teams.full_name AS winner_fullname,
        (SELECT short_name FROM teams WHERE id = matches.team_1) AS team_1,
        (SELECT short_name FROM teams WHERE id = matches.team_2) AS team_2,
        (SELECT name FROM players WHERE id = matches.man_of_the_match) AS man_of_the_match,
        (SELECT name FROM players WHERE id = matches.bowler_of_the_match) AS bowler_of_the_match,
        (SELECT name FROM players WHERE id = matches.best_fielder) AS best_fielder,
         matches.created_at
        FROM matches
        JOIN teams on teams.id = matches.winner
        ORDER BY created_at DESC
        ;
        `)

        return toCamelCase([])
    }

    static async createMatch(data){
        
        const { rows } =  await pool.query(`
        WITH A as (
            INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
        VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8)
        )
        UPDATE scoreboard
        SET
            score = (SELECT score FROM scoreboard WHERE team_id = $4) + 2,
            crr = (SELECT crr FROM scoreboard WHERE team_id = $4) + $9
        WHERE 
            team_id = $4;
        ` ,[
            data.team_1,
            data.team_2,
            data.venue,
            data.winner,
            data.looser,
            data.manOfTheMatch,
            data.bowlerOfTheMatch,
            data.bestFielder,
            data.crr
        ])



        return toCamelCase(rows)
    }
    
}

module.exports = MatchPool
