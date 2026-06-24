public abstract class DocumentFactory {

    // Factory Method
    public abstract Document createDocument();

    // Common method
    public void openDocument() {
        Document doc = createDocument();
        doc.open();
    }
}
