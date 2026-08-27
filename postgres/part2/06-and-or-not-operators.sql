SELECT name, price, sku FROM products
WHERE sku IN ('TECH-WNC-00X1','TECH-WNC-00X2','TECH-WNC-00X3') 
AND price = 249.99;
  
SELECT name, price, sku FROM products
WHERE sku IN ('TECH-WNC-00X1','TECH-WNC-00X2','TECH-WNC-00X3') 
OR NOT price = 249.99;