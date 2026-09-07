CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL

);

CREATE TABLE posts (
    id UUID PRIMARY KEY  DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL REFERENCES users(id),

    title TEXT NOT NULL ,

    status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft', 'published')),

    views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0)
);

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    post_id UUID NOT NULL REFERENCES posts(id),

    body TEXT NOT NULL
);

CREATE TABLE tags(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 

    name TEXT NOT NULL UNIQUE
);


CREATE TABLE post_tags(
    post_id UUID NOT NULL REFERENCES posts(id),

    tags_id UUID NOT NULL REFERENCES tags(id),

    PRIMARY KEY (post_id, tags_id)
);

INSERT INTO users (name)
VALUES
('Adekanye Oluwatosin'),
('John Doe');

-- DELETE  FROM users;

INSERT INTO posts (user_id, title, status, views)
VALUES
(
    (SELECT id FROM users WHERE name = 'Adekanye Oluwatosin'),
    'Introduction to PostgreSQL',
    'published',
    245
),
(
    (SELECT id FROM users WHERE name = 'John Doe'),
    'Understanding SQL Joins',
    'published',
    532
),
(
    (SELECT id FROM users WHERE name = 'John Doe'),
    'Getting Started with Node.js',
    'published',
    812
),
(
    (SELECT id FROM users WHERE name = 'Adekanye Oluwatosin'),
    'REST API Best Practices',
    'draft',
    0
),
(
    (SELECT id FROM users WHERE name = 'Adekanye Oluwatosin'),
    'Understanding Database Relationships',
    'published',
    421
);


INSERT INTO tags (name) VALUES
('PostgreSQL'),
('SQL'),
('Database'),
('Node.js'),
('JavaScript'),
('Backend'),
('REST API'),
('Programming'),
('Web Development'),
('Tutorial');

INSERT INTO comments (post_id, body)
VALUES
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    'This is a very helpful introduction to PostgreSQL.'
),
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    'I learned a lot from this article.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    'The explanation of INNER JOIN was really clear.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    'Can you also explain FULL OUTER JOIN?'
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    'Node.js is one of my favorite backend technologies.'
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    'Great tutorial for beginners.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding Database Relationships'),
    'The explanation of relationships makes sense.'
);

INSERT INTO comments (post_id, body)
VALUES
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    'This is a very helpful introduction to PostgreSQL.'
),
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    'I learned a lot from this article.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    'The explanation of INNER JOIN was really clear.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    'Can you also explain FULL OUTER JOIN?'
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    'Node.js is one of my favorite backend technologies.'
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    'Great tutorial for beginners.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding Database Relationships'),
    'The explanation of relationships makes sense.'
);

INSERT INTO post_tags (post_id, tags_id)
VALUES
-- Introduction to PostgreSQL
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    (SELECT id FROM tags WHERE name = 'PostgreSQL')
),
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    (SELECT id FROM tags WHERE name = 'Database')
),
(
    (SELECT id FROM posts WHERE title = 'Introduction to PostgreSQL'),
    (SELECT id FROM tags WHERE name = 'SQL')
),
-- Understanding SQL Joins
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    (SELECT id FROM tags WHERE name = 'SQL')
),
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    (SELECT id FROM tags WHERE name = 'Database')
),
(
    (SELECT id FROM posts WHERE title = 'Understanding SQL Joins'),
    (SELECT id FROM tags WHERE name = 'Tutorial')
),
-- Getting Started with Node.js
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    (SELECT id FROM tags WHERE name = 'Node.js')
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    (SELECT id FROM tags WHERE name = 'JavaScript')
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    (SELECT id FROM tags WHERE name = 'Backend')
),
(
    (SELECT id FROM posts WHERE title = 'Getting Started with Node.js'),
    (SELECT id FROM tags WHERE name = 'Web Development')
),
-- REST API Best Practices
(
    (SELECT id FROM posts WHERE title = 'REST API Best Practices'),
    (SELECT id FROM tags WHERE name = 'REST API')
),
(
    (SELECT id FROM posts WHERE title = 'REST API Best Practices'),
    (SELECT id FROM tags WHERE name = 'Backend')
);