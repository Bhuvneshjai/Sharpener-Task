const express = require('express');
const bodyParser = require('body-parser');

const app1 = express();
const port = 3000;

app1.use(bodyParser.urlencoded({extended:false}));

// Route to display the form
app1.get('/add-product',(req,res) => {
    res.send('<form action="/add-product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
});

// Route to handle form submission
app1.post('/add-product',(req,res) => {
    const productName = req.body.product;
    console.log('Product Name:', productName);
    res.redirect('/'); // Redirect to other or home page after submission the form
});

app1.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});