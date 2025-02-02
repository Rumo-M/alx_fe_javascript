// ... (rest of the code remains the same)

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        
        // Store the updated quotes array in local storage
        localStorage.setItem("quotes", JSON.stringify(quotes));
        
        showRandomQuote();
        createAddQuoteForm();
    }
}

// Load quotes from local storage on page load
document.addEventListener("DOMContentLoaded", function() {
    const storedQuotes = localStorage.getItem("quotes");
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
});

// Add an event listener to the export button
document.getElementById("exportQuotes").addEventListener("click", exportQuotes);

// Function to export quotes as a JSON file
function exportQuotes() {
    const quotesJSON = JSON.stringify(quotes);
    const blob = new Blob([quotesJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    a.click();
}
