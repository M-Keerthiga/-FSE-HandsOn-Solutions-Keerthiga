package com.cognizant;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Step 1: Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Inject Mock into Service
        MyService service = new MyService(mockApi);

        // Step 3: Call Method
        service.fetchData();

        // Step 4: Verify Interaction
        verify(mockApi).getData();

    }
}