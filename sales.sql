INSERT INTO sales_table(product_id,sales_date,price)
SELECT DISTINCT products.id,sales_csv.date,sales_csv.sales_price
FROM sales_csv
INNER JOIN products
ON products.product_name = sales_csv.stock_item;