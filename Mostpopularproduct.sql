SELECT SUM(qty),product_id,product_name
FROM sales_table s
INNER JOIN products p
ON s.product_id = p.id
GROUP BY product_name
ORDER BY SUM(qty) DESC
LIMIT 0,1;
