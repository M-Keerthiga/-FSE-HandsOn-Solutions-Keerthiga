USE BankDB;

-- =====================================================
-- SCENARIO 1
-- Process Monthly Interest for Savings Accounts
-- =====================================================

DROP PROCEDURE IF EXISTS ProcessMonthlyInterest;

DELIMITER $$

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    SELECT 'Monthly interest processed successfully.' AS Message;

END$$

DELIMITER ;

-- Execute Procedure
CALL ProcessMonthlyInterest();

-- Verify Result
SELECT * FROM Accounts;


-- =====================================================
-- SCENARIO 2
-- Update Employee Bonus
-- =====================================================

DROP PROCEDURE IF EXISTS UpdateEmployeeBonus;

DELIMITER $$

CREATE PROCEDURE UpdateEmployeeBonus
(
    IN p_Department VARCHAR(50),
    IN p_BonusPercentage DECIMAL(5,2)
)

BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercentage / 100)
    WHERE Department = p_Department;

    SELECT 'Employee bonus updated successfully.' AS Message;

END$$

DELIMITER ;

-- Example Execution
CALL UpdateEmployeeBonus('HR',10);

-- Verify Result
SELECT * FROM Employees;


-- =====================================================
-- SCENARIO 3
-- Transfer Funds Between Accounts
-- =====================================================

DROP PROCEDURE IF EXISTS TransferFunds;

DELIMITER $$

CREATE PROCEDURE TransferFunds
(
    IN p_SourceAccount INT,
    IN p_TargetAccount INT,
    IN p_Amount DECIMAL(10,2)
)

BEGIN

    DECLARE v_Balance DECIMAL(10,2);

    -- Get Source Account Balance
    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_SourceAccount;

    -- Check Balance
    IF v_Balance >= p_Amount THEN

        -- Deduct Amount
        UPDATE Accounts
        SET Balance = Balance - p_Amount
        WHERE AccountID = p_SourceAccount;

        -- Add Amount
        UPDATE Accounts
        SET Balance = Balance + p_Amount
        WHERE AccountID = p_TargetAccount;

        SELECT 'Fund Transfer Successful.' AS Message;

    ELSE

        SELECT 'Insufficient Balance.' AS Message;

    END IF;

END$$

DELIMITER ;

-- Example Execution
CALL TransferFunds(1,2,500);

-- Verify Result
SELECT * FROM Accounts;
