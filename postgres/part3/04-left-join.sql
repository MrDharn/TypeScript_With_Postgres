SELECT comments.body AS comment_body, posts.title AS posts_title
FROM comments
LEFT JOIN posts ON comments.post_id = posts.id


SELECT posts.title AS post_title ,comments.body AS comment_body
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id