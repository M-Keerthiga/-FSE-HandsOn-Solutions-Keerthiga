-- =====================================================
-- ORM Learn Database Setup
-- =====================================================

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS ormlearn;

-- 2. Use the database
USE ormlearn;

-- 3. Drop the table if it already exists (optional)
DROP TABLE IF EXISTS country;

-- 4. Create the country table
CREATE TABLE country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- 5. Insert sample records
INSERT INTO country (code, name) VALUES
('IN', 'India'),
('US', 'United States of America'),
('JP', 'Japan'),
('CN', 'China'),
('GB', 'United Kingdom'),
('FR', 'France'),
('DE', 'Germany'),
('CA', 'Canada'),
('AU', 'Australia'),
('BR', 'Brazil');

-- 6. Display all records
SELECT * FROM country;

-- 7. Display a specific country
SELECT * FROM country
WHERE code = 'IN';

-- 8. Count the number of countries
SELECT COUNT(*) AS TotalCountries
FROM country;

-- 9. Sort countries alphabetically
SELECT *
FROM country
ORDER BY name ASC;

-- 10. Verify table structure
DESCRIBE country;

-- =====================================================
-- End of Script
-- =====================================================