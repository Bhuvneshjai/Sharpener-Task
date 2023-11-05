async function printInSequence() {
    const print = (text, delay) => new Promise((resolve) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay);
    });

    console.log('a');
    console.log('b');
    await print('c',3000);
    await print('d',0);
    console.log('e');
}

printInSequence();

// This code is similar to the previous example but uses an async function and a separate print function that returns a promise for delayed printing. The await keyword is used to ensure the correct order of execution.