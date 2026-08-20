DROP TABLE IF EXISTS basics.products_basic;

CREATE TABLE basics.products_basic (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    description TEXT,

    stock INTEGER DEFAULT 0,

    total_views BIGINT DEFAULT 0,

-- exact decimal such that the 
    price NUMERIC(10, 2),

    isActive BOOLEAN DEFAULT true
);

INSERT INTO basics.products_basic
(name, description, stock, total_views, price, isActive)
VALUES
('product 1', 'product desc', 100, 2400, 5000, true), 
('product 2', 'product desc wella', 300, 4000, 12000, false);

SELECT * FROM basics.products_basic;

SELECT id, name, price FROM basics.products_basic
WHERE isActive; 