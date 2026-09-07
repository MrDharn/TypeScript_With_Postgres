SELECT users.name AS author_name, posts.title AS post_title
FROM posts
INNER JOIN users ON  posts.user_id = users.id;


-- SELECT users.name AS author_name, posts.title AS post_title
-- FROM users
-- INNER JOIN posts ON users.id = posts.user_id