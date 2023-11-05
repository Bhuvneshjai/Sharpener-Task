function delayPrint(text, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay);
    });
}

async function printInSequence() {
    console.log('a');
    console.log('b');
    await delayPrint('c',3000);
    await delayPrint('d',0);
    console.log('e');
}

printInSequence();

// In this code, delayPrint is a function that returns a promise that resolves after a specified delay. The printInSequence function is an async function that prints the desired messages in the required sequence using await to pause the execution until the promises are resolved.