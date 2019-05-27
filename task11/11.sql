SELECT DATEDIFF(DATE_FORMAT(CURRENT_TIMESTAMP, '%Y-%m-%d'), creation_date) AS days_ago FROM photo_portal.photo_post
WHERE creation_date = (SELECT MIN(creation_date) FROM photo_portal.photo_post);