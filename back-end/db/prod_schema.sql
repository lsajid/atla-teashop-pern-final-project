DROP TABLE IF EXISTS teas;

CREATE TABLE teas (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    image TEXT,
    description TEXT,
    price INTEGER DEFAULT 0,
    is_popular BOOLEAN
);