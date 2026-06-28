-- ==========================================
-- BANK MANAGEMENT SYSTEM - CONTROL STRUCTURES
-- ==========================================

-- Create Database
CREATE DATABASE IF NOT EXISTS BankDB;
USE BankDB;

-- ==========================================
-- DROP TABLES IF ALREADY EXIST
-- ==========================================

DROP TABLE IF EXISTS Transactions;
DROP TABLE IF EXISTS Loans;
DROP TABLE IF EXISTS Accounts;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Employees;

-- ==========================================
-- CREATE TABLES
-- ==========================================

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    DOB DATE,
    Balance DECIMAL(10,2),
    LastModified DATETIME,
    IsVIP BOOLEAN DEFAULT FALSE
);

CREATE TABLE Accounts (
    AccountID INT PRIMARY KEY,
    CustomerID INT,
    AccountType VARCHAR(20),
    Balance DECIMAL(10,2),
    LastModified DATETIME,
    FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID INT PRIMARY KEY,
    AccountID INT,
    TransactionDate DATETIME,
    Amount DECIMAL(10,2),
    TransactionType VARCHAR(20),
    FOREIGN KEY (AccountID)
        REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    LoanAmount DECIMAL(10,2),
    InterestRate DECIMAL(5,2),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Position VARCHAR(50),
    Salary DECIMAL(10,2),
    Department VARCHAR(50),
    HireDate DATE
);

-- ==========================================
-- INSERT SAMPLE DATA
-- ==========================================

INSERT INTO Customers VALUES
(1, 'John Doe', '1950-05-15', 12000, NOW(), FALSE),
(2, 'Jane Smith', '1990-07-20', 1500, NOW(), FALSE),
(3, 'Robert King', '1958-08-10', 15000, NOW(), FALSE);

INSERT INTO Accounts VALUES
(1, 1, 'Savings', 1000, NOW()),
(2, 2, 'Checking', 1500, NOW()),
(3, 3, 'Savings', 5000, NOW());

INSERT INTO Transactions VALUES
(1, 1, NOW(), 200, 'Deposit'),
(2, 2, NOW(), 300, 'Withdrawal');

INSERT INTO Loans VALUES
(1, 1, 5000, 5, CURDATE(),
 DATE_ADD(CURDATE(), INTERVAL 20 DAY)),

(2, 2, 10000, 6, CURDATE(),
 DATE_ADD(CURDATE(), INTERVAL 90 DAY)),

(3, 3, 7000, 7, CURDATE(),
 DATE_ADD(CURDATE(), INTERVAL 15 DAY));

INSERT INTO Employees VALUES
(1, 'Alice Johnson', 'Manager', 70000, 'HR', '2015-06-15'),
(2, 'Bob Brown', 'Developer', 60000, 'IT', '2017-03-20');

-- ==========================================
-- SCENARIO 1
-- Apply 1% discount to customers above 60
-- ==========================================

DELIMITER $$

CREATE PROCEDURE ApplySeniorDiscount()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE c_id INT;
    DECLARE c_dob DATE;
    DECLARE age_years INT;

    DECLARE cur CURSOR FOR
        SELECT CustomerID, DOB FROM Customers;

    DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET done = TRUE;

    OPEN cur;

    read_loop: LOOP

        FETCH cur INTO c_id, c_dob;

        IF done THEN
            LEAVE read_loop;
        END IF;

        SET age_years =
            TIMESTAMPDIFF(YEAR, c_dob, CURDATE());

        IF age_years > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c_id;

        END IF;

    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;

CALL ApplySeniorDiscount();

-- Verify
SELECT * FROM Loans;

-- ==========================================
-- SCENARIO 2
-- Promote customers to VIP
-- ==========================================

DELIMITER $$

CREATE PROCEDURE UpdateVIPStatus()
BEGIN

    UPDATE Customers
    SET IsVIP = TRUE
    WHERE Balance > 10000;

    UPDATE Customers
    SET IsVIP = FALSE
    WHERE Balance <= 10000;

END$$

DELIMITER ;

CALL UpdateVIPStatus();

-- Verify
SELECT * FROM Customers;

-- ==========================================
-- SCENARIO 3
-- Display loan reminders
-- ==========================================

SELECT
    C.CustomerID,
    C.Name,
    L.LoanID,
    L.EndDate,
    CONCAT('Reminder: Loan for ',
           C.Name,
           ' is due on ',
           L.EndDate) AS Reminder
FROM Loans L
JOIN Customers C
ON C.CustomerID = L.CustomerID
WHERE L.EndDate BETWEEN CURDATE()
AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);

-- ==========================================
-- DISPLAY ALL TABLES
-- ==========================================

SELECT * FROM Customers;
SELECT * FROM Accounts;
SELECT * FROM Transactions;
SELECT * FROM Loans;
SELECT * FROM Employees;