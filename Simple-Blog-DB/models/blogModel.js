const mysql = require('mysql2');
const fs = require('fs/promises');
const path = require('path');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '132513',
    database: 'simple_blog'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

const COMMENTS_FILE_PATH = path.join(__dirname, '../data/comments.json');

// Function to get all blogs from the database
const getAllBlogs = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM blogs', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to add a new blog to the database
const addBlog = (blogName, authorName, description) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO blogs (blogName, authorName, description, comments) VALUES (?, ?, ?, ?)';
        db.query(sql, [blogName, authorName, description, JSON.stringify([])], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to add a comment to a blog in the database
const addComment = async (blogId, comment) => {
    try {
        // Load existing comments from file
        const blogs = await getAllBlogs();
        const existingComments = blogs.find(blog => blog.id === blogId)?.comments || [];

        // Append the new comment
        const updatedComments = [...existingComments, comment];

        // Update the comments in the database
        const sql = 'UPDATE blogs SET comments = ? WHERE id = ?';
        await db.promise().execute(sql, [JSON.stringify(updatedComments), blogId]);

        return true;
    } catch (error) {
        console.error('Error adding comment:', error);
        return false;
    }
};

// Function to delete a comment from a blog in the database
const deleteComment = async (blogId, commentIndex) => {
    try {
        // Load existing comments from file
        const blogs = await getAllBlogs();
        const existingComments = blogs.find(blog => blog.id === blogId)?.comments || [];

        // Remove the comment at the specified index
        const updatedComments = existingComments.filter((_, index) => index !== commentIndex);

        // Update the comments in the database
        const sql = 'UPDATE blogs SET comments = ? WHERE id = ?';
        await db.promise().execute(sql, [JSON.stringify(updatedComments), blogId]);

        return true;
    } catch (error) {
        console.error('Error deleting comment:', error);
        return false;
    }
};

module.exports = { getAllBlogs, addBlog, addComment, deleteComment };
