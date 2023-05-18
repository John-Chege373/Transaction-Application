// Store transactions in an array
let transactions = [];

// Function to add a new transaction
function addTransaction(title, category, amount) {
    const transaction = { title, category, amount };
    transactions.push(transaction);
}

// Function to delete a transaction by index
function deleteTransaction(index) {
    transactions.splice(index, 1);
}

// Function to display transactions in the table
function displayTransactions() {
    const table = document.getElementById('transactionTable');
    table.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
        </tr>
    `;

    transactions.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.title}</td>
            <td>${transaction.category}</td>
            <td>${transaction.amount}</td>
            <td><button onclick="deleteTransaction(${index})">Delete</button></td>
        `;
        table.appendChild(row);
    });
}

// Handle form submission
const form = document.getElementById('transactionForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('titleInput');
    const categorySelect = document.getElementById('categorySelect');
    const amountInput = document.getElementById('amountInput');

    const title = titleInput.value;
    const category = categorySelect.value;
    const amount = parseFloat(amountInput.value);

    addTransaction(title, category, amount);
    displayTransactions();

    // Reset the form
    form.reset();
});

// Initial display of transactions
displayTransactions();
