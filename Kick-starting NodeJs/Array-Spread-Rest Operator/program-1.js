const hobbies = ['Sports','Cooking'];
for (let hobby in hobbies) {
    console.log(hobbies[hobby]);
}

console.log(hobbies.map(hobby => 'Hobby : '+hobby));
console.log(hobbies);

// Task
const originalArray = ['apple','oranges','','mango','','lemon'];
const transformedArray = originalArray.map((element) => {
    if (element.trim() === ''){
        return 'empty string';
    }
    return element;
});
console.log(originalArray);
console.log(transformedArray);