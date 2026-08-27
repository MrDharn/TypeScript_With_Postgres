SELECT name, stock, sku FROM products
ORDER BY sku DESC
LIMIT 4 OFFSET 0;

-- OFFSET

SELECT name, stock, sku FROM products
ORDER BY sku DESC
LIMIT 4 OFFSET 4;

SELECT name, stock, sku FROM products
ORDER BY sku DESC
LIMIT 4 OFFSET 8;

SELECT name, stock, sku FROM products
ORDER BY sku DESC
LIMIT 4 OFFSET 12


-- pagination = (page - 1) * LIMIT

