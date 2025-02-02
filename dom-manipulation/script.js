
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
