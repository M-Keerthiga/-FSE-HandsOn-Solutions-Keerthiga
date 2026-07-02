package com.cognizant;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class AppTest {

    @Test
    public void testMessage() {

        App app = new App();

        assertEquals("JUnit Setup Successful",
                app.getMessage());

    }

}