 DROP TABLE IF EXISTS basics.value_examples;

 CREATE TABLE basics.value_examples (
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    points INTEGER,
    score INTEGER
 );

 INSERT INTO basics.value_examples (nickname, points, score)
 VALUES (NULL, 10, 20),
 ('Twist', NULL, 20),
 ('zoom', 20, NULL),
 ('', 40, 50);

--  SELECT * FROM basics.value_examples;

-- SELECT * FROM basics.value_examples WHERE nickname IS NULL;

SELECT * FROM basics.value_examples WHERE nickname IS NOT NULL;

SELECT * FROM basics.value_examples WHERE nickname = '';