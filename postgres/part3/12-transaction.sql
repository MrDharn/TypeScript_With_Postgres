BEGIN;

UPDATE posts 
SET views = views + 50
WHERE status = 'draft';

UPDATE posts 
SET status = 'published'
WHERE status = 'draft' 
    AND title = 'REST API Best Practices';


SELECT  views, status
FROM posts WHERE title= 'REST API Best Practices';

COMMIT;