INSERT INTO purchases(qty,sales_date,price,product_id, supplier_id)
SELECT stock_purchases_csv.quantity as qty, stock_purchases_csv.date as p_date, stock_purchases_csv.cost as cost, products.id p_id, suppliers.id as s_id
FROM stock_purchases_csv
INNER JOIN products
ON products.product_name = stock_purchases_csv.item
INNER JOIN suppliers
ON suppliers.suppliers_name = stock_purchases_csv.shop
;