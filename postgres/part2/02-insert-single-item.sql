INSERT INTO public.products(name, price, description, stock, sku)
VALUES(
     'Wireless Noise-Canceling Headphones X version', 
    249.99, 
    'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.', 
    45, 
    'TECH-WNC-00X'
);

SELECT * FROM public.products WHERE sku = 'TECH-WNC-00X';