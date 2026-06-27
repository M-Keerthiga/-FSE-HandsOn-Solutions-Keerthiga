public class SearchAlgorithms {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {

        for (Product product : products) {

            if (product.getProductId() == targetId) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }

            else if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            }

            else {
                right = mid - 1;
            }
        }

        return null;
    }
}
