public class FactoryMethodTest {

    public static void main(String[] args) {

        // Create Word Document
        DocumentFactory wordFactory = new WordDocumentFactory();
        wordFactory.openDocument();

        // Create PDF Document
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.openDocument();

        // Create Excel Document
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        excelFactory.openDocument();
    }
}
