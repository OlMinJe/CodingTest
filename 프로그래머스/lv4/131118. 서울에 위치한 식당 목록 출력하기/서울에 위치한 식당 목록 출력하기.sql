SELECT ri.REST_ID,
    REST_NAME,
    FOOD_TYPE,
    FAVORITES,
    ADDRESS,
    ROUND(AVG(REVIEW_SCORE*1.0), 2) SCORE
FROM REST_INFO ri JOIN REST_REVIEW rr
ON ri.REST_ID = rr.REST_ID
WHERE ADDRESS LIKE '서울%'
GROUP BY REST_ID
ORDER BY SCORE DESC, FAVORITES DESC;