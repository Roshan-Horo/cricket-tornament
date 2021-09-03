BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(4,7,10,7,4,15,13,12);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 7) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 7) + 0.050
WHERE 
	team_id = 7;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(1,2,8,2,1,67,76,72);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 2) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 2) + 0.077
WHERE 
	team_id = 2;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(8,3,10,3,8,60,65,59);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 3) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 3) + 0.050
WHERE 
	team_id = 3;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(6,5,8,5,6,34,39,44);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 5) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 5) + 0.020
WHERE 
	team_id = 5;
	
COMMIT;

BEGIN;

INSERT INTO matches(team_1,team_2,venue, winner, looser, man_of_the_match, bowler_of_the_match, best_fielder)
VALUES
	(3,4,10,4,3,47,49,53);
	
UPDATE scoreboard
SET
	score = (SELECT score FROM scoreboard WHERE team_id = 4) + 2,
	crr = (SELECT crr FROM scoreboard WHERE team_id = 4) + 0.020
WHERE 
	team_id = 4;
	
COMMIT;