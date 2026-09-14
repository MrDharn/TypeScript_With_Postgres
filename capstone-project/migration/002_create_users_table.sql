CREATE TABLE user(
    id UUID  PRIMARY KEY DEFAULT gen_random_uuid(),

    email VARCHAR(225) UNIQUE NOT NULL,

    password_harsh TEXT,

    google_id VARCHAR(225) UNIQUE,

    role VARCHAR(20) NOT NULL DEFAULT 'USER'
        CHECK(role IN ('USER', 'ADMIN'),

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)