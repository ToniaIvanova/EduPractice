SELECT user.name AS author FROM photo_portal.photo_post JOIN photo_portal.user
ON photo_post.user_id = user.user_id
WHERE photo_post.creation_date = DATE_FORMAT(CURRENT_TIMESTAMP, '%Y-%m-%d')
GROUP BY user.name
HAVING COUNT(user.name) >= 1;