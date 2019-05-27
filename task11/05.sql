SELECT user.name AS author FROM photo_portal.photo_post LEFT JOIN photo_portal.user ON photo_post.user_id = user.user_id
GROUP BY user.user_id
HAVING COUNT(photo_post.user_id) >= 3;

