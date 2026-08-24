CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL,

    price NUMERIC(10, 2) NOT NULL CHECK(price>=0),

    description TEXT NOT NULL,

    stock INT NOT NULL CHECK(stock >= 0),

    sku TEXT NOT NULL UNIQUE,

    created_At TIMESTAMP NOT NULL DEFAULT NOW()
);


INSERT INTO products (name, price, description, stock, sku) VALUES
(
    'Wireless Noise-Canceling Headphones', 
    249.99, 
    'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.', 
    45, 
    'TECH-WNC-001'
),
(
    'Ergonomic Mechanical Keyboard', 
    119.50, 
    'Customizable RGB hot-swappable mechanical keyboard with quiet linear switches.', 
    30, 
    'PERIPH-EMK-002'
),
(
    'Stainless Steel Thermal Water Bottle', 
    28.00, 
    'Double-wall vacuum insulated 32oz bottle that keeps drinks cold for 24 hours.', 
    120, 
    'GEAR-WB-003'
),
(
    'Ultra-Wide Curved Gaming Monitor', 
    499.99, 
    '34-inch QHD curved display with 144Hz refresh rate and 1ms response time.', 
    12, 
    'DISP-MON-004'
),
(
    'Organic Dark Roast Coffee Beans', 
    18.75, 
    '1lb bag of fair-trade whole bean coffee with rich cocoa and nutty notes.', 
    85, 
    'GROC-DRC-005'
),
(
    'Smart Fitness Tracker Watch', 
    89.90, 
    'Water-resistant smartwatch featuring heart rate monitoring, sleep tracking, and GPS.', 
    0, 
    'WEAR-SFT-006'
);

SELECT * FROM products

