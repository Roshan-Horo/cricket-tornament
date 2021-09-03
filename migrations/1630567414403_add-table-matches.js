/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE matches (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
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
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DROP TABLE matches;
    `)
};
