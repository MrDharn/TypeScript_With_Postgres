SELECT COUNT(*) AS total_posts, 
    COUNT(*)  FILTER(WHERE posts.status = 'published') AS total_published_posts,
    MIN(views) AS lowest_post_views,
    MAX(views) AS highest_post_views,
    AVG(views) AS average,
    SUM(views) AS total_views
FROM posts;