INSERT INTO purchases(product_id,supplier_id,purchases_date,qty,price)
SELECT products.id as product_id,suppliers.id as supplier_id,stock_purchases_csv.date as date,stock_purchases_csv.quantity as qty,stock_purchases_csv.cost as cost
FROM stock_purchases_csv
INNER JOIN suppliers
ON suppliers.suppliers_name = stock_purchases_csv.shop
INNER JOIN products
ON products.product_name = stock_purchases_csv.item;
