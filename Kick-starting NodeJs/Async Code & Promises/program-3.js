// Task-2

console.log('a');
console.log('b');
setTimeout(() => {
    console.log('c');
},3000);
setTimeout(() => {
    console.log('d');
}, 0);
console.log('e');