const posts = [
    {title : 'One', body : 'This is post one', createdAt : new Date().getTime()},
    {title : 'Two', body : 'This is post two', createdAt : new Date().getTime()}
];

var interval;

function getPost() {
    clearInterval(interval);
    interval = setTimeout( () => {
        posts.forEach((post, index) => {
            console.log(post.title);
        });
    },1000);
}

function createPost(post, callback) {
    setTimeout( () => {
        post.createdAt = new Date().getTime();
        posts.push(post);
        callback();
    },1000);
}

function create4thPost(post4, callback) {
    setTimeout(() => {
        callback(post4, getPost);
    },2000);
}

function fetchInput(postTitle, postBody) {
    create4thPost({title : postTitle, body : postBody}, createPost);
}

fetchInput('Three','This is post three');
