// script.js

async function fetchBlogs() {
    const response = await fetch('/blog/list');
    const data = await response.json();

    const blogsContainer = document.getElementById('blogs');
    blogsContainer.innerHTML = '';

    data.blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog';
        blogElement.innerHTML = `<h3>${blog.blogName} by ${blog.authorName}</h3>
                                <p>${blog.description}</p>
                                <ul>${blog.comments.map(comment => `<li>${comment} <button onclick="deleteComment(${blog.id}, ${blog.comments.indexOf(comment)})">Delete</button></li>`).join('')}</ul>
                                <form onsubmit="submitComment(event, ${blog.id})">
                                    <input type="text" name="comment" required>
                                    <button type="submit">Add Comment</button>
                                </form>`;
        blogsContainer.appendChild(blogElement);
    });
}

async function submitComment(event, blogId) {
    event.preventDefault();

    const commentInput = event.target.querySelector('input[name="comment"]');
    const comment = commentInput.value;

    await fetch('/blog/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `blogId=${blogId}&comment=${comment}`,
    });

    commentInput.value = '';

    fetchBlogs();
}

async function deleteComment(blogId, commentIndex) {
    await fetch('/blog/delete-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `blogId=${blogId}&commentIndex=${commentIndex}`,
    });

    fetchBlogs();
}

// Initial fetch when the page loads
fetchBlogs();
