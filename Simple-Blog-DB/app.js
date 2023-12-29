const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexController = require('./controllers/indexController');
const blogController = require('./controllers/blogController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexController);
app.use('/blog', blogController);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
