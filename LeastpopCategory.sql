SELECT  categories.category_name,SUM(sales_table.qty)
FROM sales_table
INNER JOIN products
ON sales_table.product_id = products.id
INNER JOIN categories
ON products.category_id =  categories.id
GROUP BY categories.category_name
ORDER BY SUM(sales_table.qty) ASC
LIMIT 0,1;