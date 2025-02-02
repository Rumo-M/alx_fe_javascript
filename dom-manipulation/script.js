// Existing quotes array
let quotes = [
    { text: "Quote 1", category: "Inspirational" },
    { text: "Quote 2", category: "Motivational" },
    // ...
];

// Function to populate categories dynamically
function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.text = category;
        categoryFilter.appendChild(option);
    });
}

// Function to filter quotes based on selected category
function filterQuotes() {
    const categoryFilter = document.getElementById("categoryFilter");
    const selectedCategory = categoryFilter.value;
    const filteredQuotes = selectedCategory === "all" ? quotes : quotes.filter(quote => quote.category === selectedCategory);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = "";
    filteredQuotes.forEach(quote => {
        const p = document.createElement("p");
        p.textContent = quote.text;
        quoteDisplay.appendChild(p);
    });
    // Save the last selected filter in local storage
    localStorage.setItem("lastFilter", selectedCategory);
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        // Update the categories dropdown if a new category is introduced
        const categoryFilter = document.getElementById("categoryFilter");
        categoryFilter.innerHTML = "<option value='all'>All Categories</option>";
        const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
        uniqueCategories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.text = category;
            categoryFilter.appendChild(option);
        });
        // Save the updated quotes array in local storage
        localStorage.setItem("quotes", JSON.stringify(quotes));
        filterQuotes();
    }
}

// Load quotes from local storage on page load
document.addEventListener("DOMContentLoaded", function() {
    const storedQuotes = localStorage.getItem("quotes");
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
    populateCategories();
    const lastFilter = localStorage.getItem("lastFilter");
    if (lastFilter) {
        document.getElementById("categoryFilter").value = lastFilter;
        filterQuotes();
    }
});
