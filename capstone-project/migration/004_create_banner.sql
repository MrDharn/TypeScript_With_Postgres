CREATE TABLE banner(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    imageUrl TEXT NOT NULL,

    cloudinary_public_id TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT NOW(),

    updated_at TIMESTAMP DEFAULT NOW()
)