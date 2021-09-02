/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
     INSERT INTO teams(full_name, short_name, state, captain, coach)
     VALUES 
        ('Chennai Super Kings', 'CSK', 'Chennai', 'MS Dhoni', 'Stephen Fleming'),
        ('Delhi Capitals', 'DC', 'Delhi', 'Rishabh Pant', 'Ricky Ponting'),
        ('Kolkata Knight Riders', 'KKR', 'Kolkata', 'Eoin Morgan', 'Brendon McCullum'),
        ('Mumbai Indians', 'MI', 'Mumbai', 'Rohit Sharma', 'Mahela Jayawardene'),
        ('Punjab Kings', 'PK', 'Punjab', 'KL Rahul', 'Anil Kumble'),
        ('Rajasthan Royals', 'RR', 'Rajasthan', 'Sanju Samson', 'Shane Warne'),
        ('Royal Challengers Bangalore', 'RCB', 'Bangalore', 'Virat Kohli', 'Simon Katich'),
        ('Sunrisers Hyderabad', 'SH', 'Hyderabad', 'Kane Williamson', 'Trevor Bayliss')

    `);
};

exports.down = pgm => {
        pgm.sql(`
         Delete FROM teams;
        `);
};
