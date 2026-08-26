INSERT INTO (name, price, description, stock, sku)
VALUES
(
    'Wireless Noise-Canceling Headphones 00X1', 
    249.99, 
    'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.', 
    45, 
    'TECH-WNC-00X1'
),
(
     'Wireless Noise-Canceling Headphones 00X2', 
    249.99, 
    'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.', 
    45, 
    'TECH-WNC-00X2'
),
(
     'Wireless Noise-Canceling Headphones 00X3', 
    249.99, 
    'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.', 
    45, 
    'TECH-WNC-00X3'
);

SELECT name,price, stock, price, sku FROM products
WHERE sku IN ('TECH-WNC-00X3', 'TECH-WNC-00X2', 'TECH-WNC-00X1')