const person = {
  name: "Bhuvnesh Jain",
  age: 22,
  greet() {
    console.log("Hey ! " + this.name);
  },
};

const printName = (personData) => {
  console.log(personData.name);
};

printName(person);

// Destructuring
const printName1 = ({ name }) => {
  console.log(name);
};

const { name, age } = person;
console.log(name, age);

const hobbies = ["coding", "playing"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// Task-1
// In this task, you have an object obj1. You use destructuring to create new variables key1 and key3 and assign them the values from the obj1 object. The spread operator { ...obj1 } creates a shallow copy of the obj1 object. When you log key1 and key3, it will print 1 and 1000 to the console.
const obj1 = { key1: 1, key2: 2, key3: 1000 };
const { key1, key3 } = { ...obj1 };
console.log(key1, key3);

// Task-2
// In this task, you have an array arr1. You use array destructuring to create new variables val1 and val2 and assign them values from the arr1 array. When you log val1 and val2, it will print 'value1' and 'value2' to the console.
const arr1 = ["value1", "value2"];
const [val1, val2] = arr1;
console.log(val1);
console.log(val2);

// Task-3
// In this task, you have an object obj2. You initially use object destructuring to create new variables key11 and key22 and assign them the values from the obj2 object. Then, you update the values of key11 and key22 to 20 and 123, respectively. However, this does not affect the original obj2 object. When you log obj2.key11 and obj2.key22, it will print the original values, which are 1 and 2.
const obj2 = { key11: 1, key22: 2, key32: 1000 };
let { key11, key22 } = obj2;
key11 = 20;
key22 = 123;
console.log(obj2.key11, obj2.key22);

// So, in Task-3, the values in the original obj2 object remain unchanged. The destructuring and variable assignment do not create a reference back to the original object; they create new variables with copies of the values.