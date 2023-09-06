document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const date = document.getElementById('date').value;

    const expense = {item, description, price, date};

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    displayExpenses();
    e.target.reset();
});

function displayExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const list = document.getElementById('expense-list');
    list.innerHTML = '';

    expenses.forEach((expense, index) => {
        list.innerHTML += `
        <li class="list-group-item">
            ${expense.date} - ${expense.item} ($${expense.price}): ${expense.description}
            <div class="row mt-2">
                <div class="col-6 col-md btn-width px-1">
                    <button class="btn btn-warning btn-sm btn-block" onclick="editExpense(${index})">Edit</button>
                </div>
                <div class="col-6 col-md btn-width px-1 ml-md-auto">
                    <button class="btn btn-danger btn-sm btn-block" onclick="deleteExpense(${index})">Delete</button>
                </div>
            </div>
        </li>`;
    });
}

function editExpense(index) {
    const expenses = JSON.parse(localStorage.getItem('expenses'));
    const expense = expenses[index];

    document.getElementById('item').value = expense.item;
    document.getElementById('description').value = expense.description;
    document.getElementById('price').value = expense.price;
    document.getElementById('date').value = expense.date;

    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function showDescription(value) {
    const descriptiondiv = document.getElementById('descriptiondiv');
    if (value) {
        descriptiondiv.classList.add('show');
    } else {
        descriptiondiv.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', displayExpenses);