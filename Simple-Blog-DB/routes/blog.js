const express = require('express');
const router = express.Router();
const path = require('path');
const { loadJSONFile, saveJSONFile } = require('../utils/fileUtils');

// Load existing blogs and comments from the file
let blogs = loadJSONFile(path.join(__dirname, '../data/blogs.json'));
let comments = loadJSONFile(path.join(__dirname, '../data/comments.json'));

router.get('/list', (req, res) => {
    res.json({ blogs, comments });
});

router.post('/submit', (req, res) => {
    const { blogName, authorName, description } = req.body;

    const newBlog = {
        id: blogs.length + 1,
        blogName,
        authorName,
        description,
        comments: [],
    };

    blogs.push(newBlog);
    saveJSONFile(path.join(__dirname, '../data/blogs.json'), blogs);

    res.redirect('/');
});

router.post('/comment', (req, res) => {
    const { blogId, comment } = req.body;
    const blog = blogs.find(b => b.id == blogId);

    if (blog) {
        blog.comments.push(comment);
        saveJSONFile(path.join(__dirname, '../data/blogs.json'), blogs);
    }

    res.redirect('/');
});

router.post('/delete-comment', (req, res) => {
    const { blogId, commentIndex } = req.body;
    const blog = blogs.find(b => b.id == blogId);

    if (blog && blog.comments.length > commentIndex) {
        blog.comments.splice(commentIndex, 1);
        saveJSONFile(path.join(__dirname, '../data/blogs.json'), blogs);
    }

    res.redirect('/');
});

module.exports = router;
