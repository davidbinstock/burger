-- Drops the "burgers_db" database if it exists currently
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database
CREATE DATABASE burgers_db;
-- Use the "burgers_db" database
USE burgers_db;

-- Create the "burgers" table
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
