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

