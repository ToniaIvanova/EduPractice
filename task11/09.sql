SELECT user.name AS author, photo_post.creation_date AS date
FROM photo_portal.photo_post
LEFT JOIN photo_portal.user ON photo_post.user_id = user.user_id WHERE LENGTH(photo_post.description) > 100
ORDER BY creation_date ASC;