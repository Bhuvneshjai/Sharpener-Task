# Expense Project

### HTML Structure:
* A form (expense-form) that allows users to input the details of an expense, which include an item (like 'Movie', 'Shopping', etc.), a description, a price, and a date.
* An unordered list (expense-list) where the list of expenses will be displayed.

### CSS Styling:
* The body has a light gray background.
* The main content is centered in a white container with a maximum width of 600 pixels.
* The container has a shadow, rounded corners, and padding.
* The main heading (h2) is centered and has a blue color.
* There's a media query ensuring that on wider screens (more than 700 pixels wide), the "Edit" and "Delete" buttons have a maximum width of 120 pixels.

### JavaScript Functionality:
* When the form is submitted, it prevents the default form submission behavior and captures the input values.
* The captured values are then saved to the local storage as an object within an array.
* The displayExpenses function retrieves the stored expenses and dynamically populates the expense-list with the details of each expense. Alongside each expense, there are "Edit" and "Delete" buttons.
* The "Edit" button allows users to modify an existing expense. It loads the selected expense details back into the form for editing, and once edited, it removes the previous record and updates the list.
* The "Delete" button lets users remove an expense from the list and updates the local storage accordingly.
* The showDescription function toggles the visibility of the description input based on the selected item. If a valid item is selected, the description input is shown; otherwise, it's hidden.
* The application initializes by displaying stored expenses using the document.addEventListener('DOMContentLoaded', displayExpenses); line, ensuring that previously added expenses are shown when the page is loaded or refreshed.

In summary, this code offers a simplistic "Expense Tracker" that allows users to add, edit, and delete their expenses, with the data being stored in the browser's local storage. This ensures that the data persists even after the browser is closed or refreshed.

![image](https://github.com/Bhuvneshjai/Sharpener-Task/assets/82877515/050dd3e8-b6da-4523-a174-e8aa44817b40)
