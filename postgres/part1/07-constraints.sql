DROP TABLE IF EXISTS basics.accounts;

CREATE TABLE basics.accounts (
    id SERIAL PRIMARY KEY,

    firstName TEXT NOT NULL,

    email TEXT NOT NULL UNIQUE,

    age INTEGER CHECK (age>=18),

    isActive BOOLEAN DEFAULT FALSE,

    created_At TIMESTAMP DEFAULT NOW()
);

INSERT INTO basics.accounts (firstName, email, age)
VALUES ('dharn', 'dharn@example.com', 40);

SELECT * FROM basics.accounts;