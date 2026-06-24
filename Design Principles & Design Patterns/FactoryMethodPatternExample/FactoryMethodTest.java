public class FactoryMethodTest {
    public static void main(String[] args) {
        // Create Word Document using Factory
        DocumentFactory wordFactory = new WordDocumentFactory();
        System.out.println("--- Processing Word Document ---");
        wordFactory.processDocument();

        // Create PDF Document using Factory
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        System.out.println("\n--- Processing PDF Document ---");
        pdfFactory.processDocument();

        // Create Excel Document using Factory
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        System.out.println("\n--- Processing Excel Document ---");
        excelFactory.processDocument();
    }
}
