// Define the quotes array
let quotes = [
    { text: "Believe you can and you're halfway there.", category: "Inspirational" },
    { text: "The only way to do great work is to love what you do.", category: "Motivational" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Inspirational" },
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = "";

    const quoteText = document.createElement("p");
    quoteText.textContent = randomQuote.text;
    quoteDisplay.appendChild(quoteText);

    const quoteCategory = document.createElement("p");
    quoteCategory.textContent = `Category: ${randomQuote.category}`;
    quoteDisplay.appendChild(quoteCategory);
}

// Function to create the add quote form
function createAddQuoteForm() {
    const addQuoteForm = document.getElementById("addQuoteForm");
    addQuoteForm.innerHTML = "";

    const newQuoteText = document.createElement("input");
    newQuoteText.type = "text";
    newQuoteText.placeholder = "Enter a new quote";
    newQuoteText.id = "newQuoteText";
    addQuoteForm.appendChild(newQuoteText);

    const newQuoteCategory = document.createElement("input");
    newQuoteCategory.type = "text";
    newQuoteCategory.placeholder = "Enter quote category";
    newQuoteCategory.id = "newQuoteCategory";
    addQuoteForm.appendChild(newQuoteCategory);

    const addQuoteButton = document.createElement("button");
    addQuoteButton.textContent = "Add Quote";
    addQuoteButton.onclick = addQuote;
    addQuoteForm.appendChild(addQuoteButton);
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        showRandomQuote();
        createAddQuoteForm();
    }
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuote").addEventListener("click", createAddQuoteForm);

// Display a random quote on page load
showRandomQuote();
