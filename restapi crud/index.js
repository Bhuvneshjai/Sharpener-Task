const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Retrieve all posts : GET
async function getAllPosts() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        console.log("Data Fetched : ",data);
    } catch (error) {
        console.log("Error Fetching Posts : ",error.message);
    }
}

// Create new post : POST
async function createPost(title, body) {
    try {
        let response = await fetch(API_URL, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json; charset=UTF-8'
            },
            body : JSON.stringify({title,body})
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error Creating Posts : ",error.message);
    }
}

// Update post : PUT
async function updatePost(id, updatedPost) {
    try {
        let response = await fetch(`${API_URL}/${id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json; charset=UTF-8'
            },
            body : JSON.stringify(updatedPost)
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error Updating Posts : ",error.message);
    }
}

// Delete post : DELETE
async function deletePost(id) {
    try {
        let response = await fetch(`${API_URL}/${id}`, {
            method : 'DELETE'
        });
        if (response.status === 200) {
            console.log(`Post with ${id} has been deleted`);
        } else {
            console.log("Error deleting the post");
        }
    } catch (error) {
        console.log("Error Deleting Posts : ",error.message);
    }
}

// Test the function
getAllPosts();
createPost('New Post Title','This is body of new post');
updatePost(1,{title : 'Updated Post', body : 'updated body for post 1'});
deletePost(1);
getAllPosts();