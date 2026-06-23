public class SingletonTest {

    public static void main(String[] args) {

        // Get first instance
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started");

        // Get second instance
        Logger logger2 = Logger.getInstance();
        logger2.log("User logged in");

        // Verify both references point to same object
        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }

        // Print hash codes
        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());
    }
}