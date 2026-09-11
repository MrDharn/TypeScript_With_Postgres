SELECT views, status FROM
posts 
WHERE views > (
    SELECT AVG(views) FROM posts
)