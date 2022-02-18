DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS teas;

CREATE TABLE teas (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    image TEXT,
    description TEXT,
    price INTEGER DEFAULT 0,
    is_popular BOOLEAN
);