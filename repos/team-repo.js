const pool = require('../config/pool')
const toCamelCase = require('./utils/to-camel-case')

class TeamPool {
    static async find(){
        const {rows} = await pool.query('SELECT * FROM teams;')

        return toCamelCase(rows)
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT * FROM teams WHERE id = $1',[id])

        return toCamelCase(rows)[0]
    }

    static async teamPlayers(id){
        const { rows } = await pool.query('SELECT * FROM players WHERE team_id = $1',[id])

        return toCamelCase(rows)
    }

    
}

module.exports = TeamPool

/*

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(240) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(240) NOT NULL,
    place VARCHAR(240) NOT NULL,
    home_grd INTEGER REFERENCES teams(id)
);

INSERT INTO venues(name, place, home_grd)
VALUES
    ('M. Chinnaswamy Stadium', 'Bengaluru', 7),
    ('Arun Jaitley Stadium', 'Delhi', 2),
    ('Sunrisers Hyderabad', 'Hyderabad', 8),
    ('IS Bindra Stadium', 'Mohali', 5),
    ('Eden Gardens', 'Kolkata', 3),
    ('Holkar Cricket Stadium', 'Indore', 8),
    ('Sawai Mansingh Stadium', 'Jaipur', 6),
    ('Wankhede Stadium', 'Mumbai', 4),
    ('Maharashtra Cricket Association''s International Stadium', 'Pune', 4),
    ('M. A. Chidambaram Stadium', 'Chennai', 1),
    ('Narendra Modi Stadium', 'Ahmedabad', 6);

SELECT venues.name, venues.place, teams.short_name AS home_ground 
FROM venues
JOIN teams ON teams.id = venues.home_grd;

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
        team_1 INTEGER REFERENCES teams(id) NOT NULL,
        team_2 INTEGER REFERENCES teams(id) NOT NULL,
        venue INTEGER REFERENCES venues(id) NOT NULL,
        winner INTEGER REFERENCES teams(id),
        looser INTEGER REFERENCES teams(id),
        draw BOOLEAN DEFAULT FALSE,
        man_of_the_match INTEGER REFERENCES players(id),
        bowler_of_the_match INTEGER REFERENCES players(id),
        best_fielder INTEGER REFERENCES players(id)

    );

CREATE TABLE scoreboard (
team_id INTEGER REFERENCES teams(id),
score INTEGER DEFAULT 0 NOT NULL CHECK(score >= 0),
CRR NUMERIC(5,3) DEFAULT 0.000
);


INSERT INTO scoreboard(team_id, score,CRR)
VALUES
    (1,0,0.000),
	(2,0,0.000),
	(3,0,0.000),
	(4,0,0.000),
	(5,0,0.000),
	(6,0,0.000),
	(7,0,0.000),
	(8,0,0.000);


    ### SCOREBOARD 
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
;

 ### MATCHES
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

### MATCH TRANSACTION
BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(4,7,10,7,4,15,13,12);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 7) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 7) + 0.050
WHERE 
	team_id = 7;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(1,2,8,2,1,67,76,72);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 2) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 2) + 0.077
WHERE 
	team_id = 2;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(8,3,10,3,8,60,65,59);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 3) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 3) + 0.050
WHERE 
	team_id = 3;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(6,5,8,5,6,34,39,44);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 5) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 5) + 0.020
WHERE 
	team_id = 5;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(3,4,10,4,3,47,49,53);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 4) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 4) + 0.020
WHERE 
	team_id = 4;
	
COMMIT;

*/