const express = require('express');
const router = express.Router();
const { getAllBlogs, addBlog, addComment, deleteComment } = require('../models/blogModel');

router.get('/list', async (req, res) => {
    const blogs = await getAllBlogs();
    res.json({ blogs });
});

router.post('/submit', async (req, res) => {
    const { blogName, authorName, description } = req.body;

    const result = await addBlog(blogName, authorName, description);

    if (result) {
        res.redirect('/');
    } else {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/comment', async (req, res) => {
    const { blogId, comment } = req.body;
    const result = await addComment(blogId, comment);

    if (result) {
        res.redirect('/');
    } else {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/delete-comment', async (req, res) => {
    const { blogId, commentIndex } = req.body;
    const result = await deleteComment(blogId, commentIndex);

    if (result) {
        res.redirect('/');
    } else {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
