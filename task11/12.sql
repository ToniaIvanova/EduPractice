SELECT user.name AS author, COUNT(user.name) AS amount FROM photo_portal.photo_post JOIN photo_portal.user
ON photo_post.user_id = user.user_id
WHERE photo_post.creation_date LIKE '%-05-09%'
GROUP BY user.name;
