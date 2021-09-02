/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
     CREATE TABLE teams (
         id SERIAL PRIMARY KEY,
         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
         updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
         full_name VARCHAR(100) NOT NULL,
         short_name VARCHAR(15) NOT NULL,
         state VARCHAR(50) NOT NULL,
         captain VARCHAR(100) NOT NULL,
         coach VARCHAR(100) NOT NULL
     );
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DROP TABLE teams;
    `);
};
