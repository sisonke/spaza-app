INSERT INTO sales_table(price,qty,sales_date,product_id)
SELECT sales_csv.sales_price, sales_csv.no_sold, sales_csv.date, products.id
FROM sales_csv
INNER JOIN products
ON products.product_name = sales_csv.stock_item
;