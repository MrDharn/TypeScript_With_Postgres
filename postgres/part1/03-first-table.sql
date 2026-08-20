DROP TABLE IF EXISTS basics.students;

CREATE TABLE basics.students (
    -- create an auto incrementing integer
    id SERIAL PRIMARY KEY,


    name TEXT NOT NULL,

    email TEXT NOT NULL UNIQUE,

    age INTEGER CHECK (age >= 18),

    created_at TIMESTAMP DEFAULT NOW()
);

-- INSERT 

INSERT INTO basics.students (name, email, age)
VALUES
 ('Dharn', 'dharn@exmaple.com', 22),
 ('SAM', 'sam@example.com', 55),
 ('Julian', 'julian@example.com', 70);


 SELECT * FROM basics.students