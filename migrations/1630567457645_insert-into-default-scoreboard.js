/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
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
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DELETE FROM scoreboard;
    `);
};
