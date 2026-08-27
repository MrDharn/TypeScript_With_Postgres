-- SELECT name , price FROM products
-- WHERE (name IN ('Ergonomic Mechanical Keyboard', 'Wireless Noise-Canceling Headphones'))
-- AND  price BETWEEN 150 AND 1000;

SELECT name, price, stock FROM products
WHERE name NOT IN ('Ergonomic Mechanical Keyboard', 'Wireless Nose-Canceling Headphones')