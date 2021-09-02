/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(240) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE
    );
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DROP TABLE users;
    `);
};
