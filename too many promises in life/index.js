const posts = [
    {title : 'One', body : 'This is post one'},
    {title : 'Two', body : 'This is post two'}
];

let lastActivityTime;

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
        if (lastActivityTime) {
            console.log(`Last Activity Time : ${lastActivityTime}`);
        }
    }, 1000);
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            resolve();
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error : Something Went Wrong !');
            }
        },1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        },1000);
    });
}

createPost({title : 'Three', body : 'This is post three'}).then(
    updateLastUserActivityTime).then(getPosts).then(deleteLastPost).then(() => {
        console.log('Deleted Last Post !');
        getPosts();
    }).catch(err => console.log(err));