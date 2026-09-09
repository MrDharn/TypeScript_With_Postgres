SELECT posts.title As post_title, tags.name AS tags_name
FROM posts
INNER JOIN tags ON posts.id = tags.