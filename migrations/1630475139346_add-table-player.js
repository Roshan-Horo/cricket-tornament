/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
     CREATE TABLE players (
         id SERIAL PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         role VARCHAR(50) NOT NULL,
         team_id INTEGER,
         FOREIGN KEY(team_id) REFERENCES teams(id)
         );
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DROP TABLE players;  
    `);
};
