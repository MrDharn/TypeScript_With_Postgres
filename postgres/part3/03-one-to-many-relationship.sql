SELECT users.name AS author_name, posts.title AS post_title, posts.status
FROM users
INNER JOIN posts ON  posts.user_id = users.id
ORDER BY users.name, posts.title;
-- SELECT users.name AS author_name, posts.title AS post_title
-- FROM users
-- INNER JOIN posts ON users.id = posts.user_id

SELECT posts.title AS post_title, users.name AS author_name,
posts.views, posts.status
FROM posts
INNER JOIN users ON users.id = posts.user_id
WHERE posts.status = 'published'
ORDER BY posts.views;