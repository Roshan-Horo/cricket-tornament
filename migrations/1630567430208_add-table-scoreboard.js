/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE scoreboard (
        team_id INTEGER REFERENCES teams(id),
        score INTEGER DEFAULT 0 NOT NULL CHECK(score >= 0),
        CRR NUMERIC(5,3) DEFAULT 0.000
        );
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DROP TABLE scoreboard;
    `);
};
