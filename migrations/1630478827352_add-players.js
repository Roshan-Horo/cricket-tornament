/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
     INSERT INTO players(name, role, team_id)
     VALUES 
        ('Kane Williamson', 'Batsman', 8),
        ('Rashid Khan', 'Bowler', 8),
        ('Wriddhiman Saha', 'Batsman', 8),
        ('Khaleel Ahmed', 'Bowler', 8),
        ('Abdul Samad', 'Batsman', 8),
        ('Sandeep Sharma', 'Bowler', 8),
        ('Mujeeb Ur Rahman', 'Batsman', 8),
        ('Shreevats Goswami', 'Bowler', 8),
        ('Kedar Jadhav', 'Batsman', 8),
        ('Basil Thampi', 'Bowler', 8),
        ('Jason Roy', 'Batsman', 8),

        ('Virat Kohli', 'Batsman', 7),
        ('Mohammed Siraj', 'Bowler', 7),
        ('Scott Kuggeleijn', 'Batsman', 7),
        ('AB de Villiers', 'Bowler', 7),
        ('Daniel Sams', 'Batsman', 7),
        ('Shahbaz Ahmed', 'Bowler', 7),
        ('Finn Allen ', 'Batsman', 7),
        ('K.S Bharat', 'Bowler', 7),
        ('Yuzvendra Chahal', 'Batsman', 7),
        ('Navdeep Saini', 'Bowler', 7),
        ('Kyle Jamieson', 'Batsman', 7),

        ('Sanju Samson', 'Batsman', 6),
        ('Kuldip Yadav', 'Bowler', 6),
        ('Ben Stokes', 'Batsman', 6),
        ('Chris Morris', 'Bowler', 6),
        ('Andrew Tye', 'Batsman', 6),
        ('Kartik Tyagi', 'Bowler', 6),
        ('Shreyas Gopal', 'Batsman', 6),
        ('Rahul Tewatia', 'Bowler', 6),
        ('Jaydev Unadkat', 'Batsman', 6),
        ('Mayank Markande', 'Bowler', 6),
        ('Mahipal Lomror', 'Batsman', 6),

        ('KL Rahul', 'Batsman', 5),
        ('Harpreet Brar', 'Bowler', 5),
        ('Ishan Porel', 'Batsman', 5),
        ('Utkarsh Singh', 'Bowler', 5),
        ('Moises Henriques', 'Batsman', 5),
        ('Jhye Richardson', 'Bowler', 5),
        ('Mandeep Singh', 'Batsman', 5),
        ('Chris Jordan', 'Bowler', 5),
        ('Deepak Hooda', 'Batsman', 5),
        ('Ravi Bishnoi', 'Bowler', 5),
        ('Arshdeep Singh', 'Batsman', 5),

        ('Rohit Sharma', 'Batsman', 4),
        ('Quinton de Kock', 'Bowler', 4),
        ('Arjun Tendulkar', 'Batsman', 4),
        ('Nathan Coulter-Nile', 'Bowler', 4),
        ('Trent Boult', 'Batsman', 4),
        ('Jimmy Neesham', 'Bowler', 4),
        ('Jayant Yadav', 'Batsman', 4),
        ('Piyush Chawla', 'Bowler', 4),
        ('Kieron Pollard', 'Batsman', 4),
        ('Anmolpreet Singh', 'Bowler', 4),
        ('Mohsin Khan', 'Batsman', 4),

        ('Eoin Morgan', 'Batsman', 3),
        ('Shivam Mavi', 'Bowler', 3),
        ('Sandeep Warrier', 'Batsman', 3),
        ('Kuldeep Yadav', 'Bowler', 3),
        ('Shakib Al Hasan', 'Batsman', 3),
        ('Sunil Narine', 'Bowler', 3),
        ('Vaibhav Arora', 'Batsman', 3),
        ('Lockie Ferguson', 'Bowler', 3),
        ('Ben Cutting', 'Batsman', 3),
        ('Tim Seifert', 'Bowler', 3),
        ('Karun Nair', 'Batsman', 3),

        ('Rishabh Pant', 'Batsman', 2),
        ('Kagiso Rabada', 'Bowler', 2),
        ('Marcus Stoinis', 'Batsman', 2),
        ('Sam Billings', 'Bowler', 2),
        ('Ajinkya Rahane', 'Batsman', 2),
        ('Chris Woakes', 'Bowler', 2),
        ('Ravichandran Ashwin', 'Batsman', 2),
        ('Steve Smith', 'Bowler', 2),
        ('M Siddharth', 'Batsman', 2),
        ('Shams Mulani', 'Bowler', 2),
        ('Vishnu Vinod', 'Batsman', 2),

        ('MS Dhoni', 'Batsman', 1),
        ('Bhagath Varma', 'Bowler', 1),
        ('Imran Tahir', 'Batsman', 1),
        ('Harishankar Reddy', 'Bowler', 1),
        ('Ruturaj Gaikwad', 'Batsman', 1),
        ('Moeen Ali', 'Bowler', 1),
        ('Hari Nishaanth', 'Batsman', 1),
        ('Ravindra Jadeja', 'Bowler', 1),
        ('Deepak chahar', 'Batsman', 1),
        ('Narayan Jagadeesan', 'Bowler', 1),
        ('Suresh Raina', 'Batsman', 1)

    `);
};

exports.down = pgm => {
    pgm.sql(`
     DROP TABLE players;
    `)
};
