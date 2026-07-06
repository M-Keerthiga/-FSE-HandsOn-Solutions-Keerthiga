CREATE DATABASE IF NOT EXISTS ormlearn;

USE ormlearn;

CREATE TABLE IF NOT EXISTS employee (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DOUBLE
);

INSERT INTO employee VALUES
(101,'Keerthiga',50000),
(102,'Rahul',65000),
(103,'Priya',72000);

SELECT * FROM employee;