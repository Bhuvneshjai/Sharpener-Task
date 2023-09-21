const posts = [
    {title : 'One', body : 'This is post one.'},
    {title : 'Two', body : 'This is post two.'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createPost(post) {
    try {
        await delay(1000);
        posts.push(post);

        const error = false;

        if (error) {
            throw new Error('Something Went Wrong !');
        }
    } catch (err) {
        console.log('Error : ',err.message);
    }
}

async function init() {
    await createPost({title : 'Three', body : 'This is post three.'});
    getPosts();
}

init();