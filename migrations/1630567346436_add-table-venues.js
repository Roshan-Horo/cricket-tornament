/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE venues (
        id SERIAL PRIMARY KEY,
        name VARCHAR(240) NOT NULL,
        place VARCHAR(240) NOT NULL,
        home_grd INTEGER REFERENCES teams(id)
    );
    `);
};

exports.down = pgm => {
    pgm.sql(`
      DROP TABLE venues;
    `);
};
