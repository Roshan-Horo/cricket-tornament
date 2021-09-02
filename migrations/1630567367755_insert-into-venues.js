/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
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
    `);
};

exports.down = pgm => {
    pgm.sql(`
     DELETE FROM venues;
    `);
};
