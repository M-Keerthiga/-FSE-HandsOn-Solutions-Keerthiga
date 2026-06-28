import java.util.Scanner;

public class FinancialForecast {

    // Recursive method to calculate future value
    public static double predictFutureValue(double currentValue,
                                            double growthRate,
                                            int years) {

        // Base Case
        if (years == 0) {
            return currentValue;
        }

        // Recursive Case
        return predictFutureValue(currentValue,
                                  growthRate,
                                  years - 1)
                                  * (1 + growthRate);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Get user input
        System.out.print("Enter current investment value: ₹");
        double currentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (%): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        // Convert percentage to decimal
        growthRate = growthRate / 100;

        // Calculate future value
        double futureValue = predictFutureValue(currentValue,
                                                growthRate,
                                                years);

        // Display result
        System.out.printf("\nPredicted Future Value after %d years: ₹%.2f",
                          years, futureValue);

        sc.close();
    }
}
