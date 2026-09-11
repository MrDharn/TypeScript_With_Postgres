SELECT t.name AS tag_name,
COUNT(DISTINCT p.id) AS total_unique_posts
FROM tags AS t
LEFT JOIN post_tags AS pt 
ON pt.post_id = t.id
LEFT JOIN posts AS p
ON p.id = pt.post_id
GROUP BY t.id, t.name
ORDER BY total_unique_posts;