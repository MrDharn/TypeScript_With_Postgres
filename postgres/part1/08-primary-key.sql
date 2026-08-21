DROP TABLE IF EXISTS basics.sales;

CREATE TABLE basics.sales (
    id SERIAL PRIMARY KEY,

    product TEXT NOT NULL,

    price NUMERIC(10, 2) NOT NULL DEFAULT 0,

    created_At TIMESTAMP DEFAULT NOW()
);

INSERT INTO basics.sales (product, price)
VALUES ('product 1', 400),
('product 2', 100),


SELECT * FROM basics.sales;