DROP TABLE IF EXISTS basics.app_events;

CREATE TABLE basics.app_events (
    -- UUID
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    event_name TEXT NOT NULL,

    -- JSON BINARY

    metadata JSONB DEFAULT '{}'::jsonb,

    created_at TIMESTAMP DEFAULT NOW()
);

 INSERT INTO basics.app_events (event_name, metadata)
 VALUES
 ('sign up', '{"browser": "chrome"}'),
 ('sign in', '{"user" : "dharn"}');

 SELECT *  FROM basic.app_events;