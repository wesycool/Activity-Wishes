DROP DATABASE IF EXISTS wishes_db;

-- Make a database called "wishes_db"
CREATE DATABASE wishes_db;

USE wishes_db;

-- Inside of that database, make a table called "wishes" which will have a wish column and an id column. 
-- The id will be automatically incremented while also being the primary key.

CREATE TABLE wises(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    wish VARCHAR(255)
);