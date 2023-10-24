const API_ENDPOINT = "https://crudcrud.com/api/dfa6bd3ae3194020928b9cfe1ee6329c/products";

const form = document.getElementById("productForm");
const tableBody = document.querySelector("#productTable tbody");

// Initialize products
let products = [];

// Load products on page load
(async function loadProducts() {
    products = await fetchProductsFromAPI();

    // Check local storage and merge if necessary
    const localStorageProducts = JSON.parse(localStorage.getItem("products")) || [];
    products = products.concat(localStorageProducts.filter(lp => !products.some(p => p._id === lp._id)));

    displayProducts();
})();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const product = {
        name: form.productName.value,
        price: form.price.value,
        category: form.category.value
    };

    if (form.dataset.editingId) { // Check if in editing mode
        const updatedProduct = await updateProductInAPI(form.dataset.editingId, product);
        const indexToUpdate = products.findIndex(p => p._id === form.dataset.editingId);
        products[indexToUpdate] = updatedProduct;

        // Exit editing mode
        delete form.dataset.editingId;
    } else {
        const savedProduct = await saveProductToAPI(product);
        products.push(savedProduct);
    }

    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
    form.reset();
});

async function fetchProductsFromAPI() {
    const response = await fetch(API_ENDPOINT);
    return response.json();
}

async function saveProductToAPI(product) {
    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    return response.json();
}

async function deleteProductFromAPI(id) {
    await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'DELETE'
    });
}

async function updateProductInAPI(id, updatedProduct) {
    const response = await fetch(`${API_ENDPOINT}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    });

    if (response.headers.get("content-length") === "0") {
        // No content, return the updatedProduct
        return updatedProduct;
    } else {
        return await response.json();
    }
}

function displayProducts() {
    tableBody.innerHTML = '';
    let totalPrice = 0;
    let totalItems = 0;

    products.forEach((product, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = product.name;
        
        const price = parseFloat(product.price);
        row.insertCell().textContent = price.toFixed(2);
        row.insertCell().textContent = product.category;

        totalPrice += price;
        totalItems += 1;

        const actionCell = row.insertCell();

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm me-2";
        deleteButton.addEventListener('click', async () => {
            await deleteProductFromAPI(product._id);
            products.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(products));
            displayProducts();
        });
        actionCell.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-warning btn-sm";
        editButton.addEventListener('click', () => {
            form.productName.value = product.name;
            form.price.value = product.price;
            form.category.value = product.category;

            // Indicate that we are editing by setting a data attribute
            form.dataset.editingId = product._id;
        });
        actionCell.appendChild(editButton);
    });

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    localStorage.setItem("products", JSON.stringify(products));
}
