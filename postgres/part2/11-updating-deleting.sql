-- SELECT name, price, sku FROM products
-- WHERE sku = 'TECH-WNC-00X1';


-- UPDATE products
-- SET stock = 40, price= 400.00
-- WHERE sku = 'TECH-WNC-00X1';

-- SELECT name, price, sku FROM products
-- WHERE sku = 'TECH-WNC-00X1';


-- MULTIPLE ROW
-- SELECT name,price, sku FROM products
-- WHERE sku = 'TECH-WNC-00X1' OR sku = 'GEAR-WB-003';

-- UPDATE products 
-- SET price = ROUND(1.10 * price, 2)
-- WHERE sku = 'TECH-WHC-00X1' OR sku='GEAR-WB-003'
-- RETURNING id, name, stock, sku;

-- SELECT name,price, sku FROM products
-- WHERE sku = 'TECH-WNC-00X1' OR sku = 'GEAR-WB-003';


-- INSERT INTO products (name, stock, price, description, sku)
-- VALUES('TEMU ITEM', 40, 300.20, 'Temu Item TO be deleted', 'TEMU-WR-00X1')
-- RETURNING id, name, sku, price;

DELETE FROM products
WHERE sku = 'TEMU-WR-00X1'
RETURNING id, sku;


SELECT name FROM products
WHERE sku= 'TEMU-WR-00X1';