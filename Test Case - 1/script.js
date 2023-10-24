const API_ENDPOINT = "https://crudcrud.com/api/dfa6bd3ae3194020928b9cfe1ee6329c/products";

const form = document.getElementById("productForm");
const tableBody = document.querySelector("#productTable tbody");

// Initialize products
let products = [];

// Load products on page load
(async function loadProducts() {
    products = await fetchProductsFromAPI();
    displayProducts();
})();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const product = {
        name: form.productName.value,
        price: form.price.value,
        category: form.category.value
    };

    const savedProduct = await saveProductToAPI(product);
    products.push(savedProduct);
    displayProducts();

    form.reset();
});

async function fetchProductsFromAPI() {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data;
}

async function saveProductToAPI(product) {
    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    const data = await response.json();
    return data;
}

async function deleteProductFromAPI(id) {
    const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'DELETE'
    });
    return response.ok;
}

function displayProducts() {
    tableBody.innerHTML = '';
    products.forEach((product, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = product.name;
        row.insertCell().textContent = product.price;
        row.insertCell().textContent = product.category;

        const actionCell = row.insertCell();
        
        // Add Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm me-2";
        deleteButton.addEventListener('click', async () => {
            const success = await deleteProductFromAPI(product._id);
            if (success) {
                products.splice(index, 1);
                displayProducts();
            } else {
                alert('Failed to delete product from server.');
            }
        });
        actionCell.appendChild(deleteButton);

        // Add Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-warning btn-sm";
        editButton.addEventListener('click', () => {
            form.productName.value = product.name;
            form.price.value = product.price;
            form.category.value = product.category;
            products.splice(index, 1);
            displayProducts();
        });
        actionCell.appendChild(editButton);
    });
}
