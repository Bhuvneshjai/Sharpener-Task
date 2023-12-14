const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blog');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/blog', blogRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
