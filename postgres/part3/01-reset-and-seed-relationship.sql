CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL

);

CREATE TABLE posts (
    id UUID PRIMARY KEY  DEFAULT gen_random_uuid(),

    user_id uuid NOT NULL REFERENCES users(id),

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
)