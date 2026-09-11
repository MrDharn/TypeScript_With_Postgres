SELECT title, status, views, user_id
FROM posts;


-- where posts = published
SELECT title, status, views, user_id
FROM posts
WHERE status = 'published';


-- indexing is needed in order for the query to be done faster incase the data becomes larger
CREATE INDEX IF NOT EXISTS idx_post_status
ON posts(status);

SELECT title, views, status, user_id
FROM posts 
WHERE status='published'
ORDER BY views DESC;

CREATE INDEX IF NOT EXISTS idx_post_status_views
ON posts(status, views DESC)

SELECT title, views
FROM posts
WHERE posts.user_id = (
    SELECT id FROM users
    WHERE name = 'Adekanye Oluwatosin'
);


CREATE INDEX IF NOT EXISTS idx_post_user_id
ON posts(user_id);