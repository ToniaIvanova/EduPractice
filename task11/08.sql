SELECT user.name AS author, photo_post.creation_date AS date, photo_post.description AS descr FROM photo_portal.photo_post
LEFT JOIN photo_portal.user ON photo_post.user_id = user.user_id WHERE user.name = 'Ohremchuk'
ORDER BY creation_date ASC;