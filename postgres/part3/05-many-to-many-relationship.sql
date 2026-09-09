SELECT posts.title AS post_title, tags.name
FROM posts
    INNER JOIN post_tags ON posts.id = post_tags.post_id
    INNER JOIN tags ON post_tags.tags_id = tags.id