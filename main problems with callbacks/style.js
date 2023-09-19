function create3rdPost(callback) {
    setTimeout(() => {
        console.log('Post Three');
        if (callback) {
            callback();
        }
    },2000);
}

function create4thPost() {
    setTimeout(() => {
        console.log('Post Four');
    }, 1000);
}

create3rdPost(create4thPost);