### Frontend Implementation:
* The project uses Bootstrap 5 for UI components and styling.
* There's a form for users to input product details like name, price, and category.
* Products are displayed in a table format with options to delete or edit individual product entries.

### Backend Connection:
* The application integrates with a remote CRUD (Create, Read, Update, Delete) API provided by crudcrud.com to manage product details.

### Product Loading:
* On page load, the application fetches products from the API.
* Additionally, the application checks local storage for any products and merges the products from local storage and the API, ensuring there are no duplicates.

### Product Submission:
* Users can add new products or edit existing ones.
* For new products, details are sent to the API for creation and then stored locally.
* For editing, the application detects "editing mode" based on a data attribute on the form, allowing the user to update product details.

### CRUD Operations:
* Create: New products are added using the POST method.
* Read: Existing products are fetched from the API on page load.
* Update: Products can be edited. The updated details are sent to the API using the PUT method.
* Delete: Products can be deleted from the table, and the corresponding entry is removed from the API using the DELETE method.

### Local Storage:
* All products (whether fetched from the API or added by the user) are stored in the browser's local storage. This ensures data persistence even if the user refreshes the page.

### Interactivity:
* Each product in the table has associated "Edit" and "Delete" buttons.
* The "Edit" button populates the form with the product's details, allowing users to modify them.
* The "Delete" button removes the product from both the table and the backend.

### Summary Section:
* The application provides a summary at the bottom that displays the total number of items and the combined price of all products.

### Error Handling:
* While not explicitly shown in the code, there are points where error handling would be beneficial, especially in API interactions, to enhance user experience and prevent unexpected behaviors.

### Branch Management (From Your Git Commands):
* The project seems to have initially started on the master branch.
* There was an attempt to switch and push to a branch named Rest_API_Integration or similar variations. Proper branch naming and management is essential for collaboration and versioning.

##### These are the notable points based on the provided code. However, this is a high-level overview, and a more in-depth analysis can delve into the specific coding practices, functionalities, and potential improvements.

![image](https://github.com/Bhuvneshjai/Sharpener-Task/assets/82877515/b39c935a-d81c-471d-854f-ff3a375a50e0)
