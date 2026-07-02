package com.cognizant;

import org.junit.Test;

import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        Calculator calc = new Calculator();

        // Assert Equals
        assertEquals(5, calc.add(2, 3));

        // Assert True
        assertTrue(calc.multiply(2, 3) == 6);

        // Assert False
        assertFalse(calc.subtract(2, 3) == 5);

        // Assert Null
        Object obj = null;
        assertNull(obj);

        // Assert Not Null
        Calculator c = new Calculator();
        assertNotNull(c);
    }

    private static class Calculator {
        int add(int a, int b) {
            return a + b;
        }

        int multiply(int a, int b) {
            return a * b;
        }

        int subtract(int a, int b) {
            return a - b;
        }
    }
}