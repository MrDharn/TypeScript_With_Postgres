CREATE TABLE support_task(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    title VARCHAR(150) NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'OPEN'
        CHECK(status IN ('OPEN', 'IN-PROGRESS', 'RESOLVED')),
    
    user_id UUID NOT NULL REFERENCES user(id) ON DELETE CASCADE,

    created_at TIMESTAMP NOT NULL DEFAULT NOW()
)