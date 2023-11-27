const express = require('express');
const bodyparser = require('body-parser');

const app2 = express();
const port = 3000;

app2.use(bodyparser.urlencoded({extended:false}));

// Route to display the form
app2.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="POST">' +
      '<label for="product">Product Name:</label>' +
      '<input type="text" id="product" name="product">' +
      '<br>' +
      '<label for="size">Product Size:</label>' +
      '<input type="text" id="size" name="size">' +
      '<br>' +
      '<button type="submit">Add Product</button>' +
      '</form>');
  });

// Route to handle the form submission
app2.post('/add-product', (req,res) => {
    const productName = req.body.product;
    const productSize = req.body.size;
    
    console.log('Product Name : ',productName);
    console.log('Product Size : ',productSize);
    res.redirect('/');
});

app2.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});