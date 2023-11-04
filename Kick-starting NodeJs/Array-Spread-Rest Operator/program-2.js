const hobbies = ["sports", "learning"];
hobbies.push('coding');
console.log(hobbies); // Outputs: ["sports", "learning", "coding"]

const person = {
    name: "Bhuvnesh Jain",
    age: 22,
    greet() {
        console.log("Hey! " + this.name);
    }
}

// Spread operator to copy the array
const copiedArray = [ ...hobbies ];
console.log("Original Array: " + hobbies);
console.log("Copied Array: " + copiedArray);

// Spread operator to copy the object
const copiedObject = { ...person };
console.log("Original Object: ", person);
console.log("Copied Object: ", copiedObject);

// Rest operator
const toArrayConversion = (...args) =>{
    return args;
}
console.log(toArrayConversion(1,2,3,4));

// Destructuring
const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name,age} = person;
console.log(name, age);

const [hobbies1, hobbies2] = hobbies;
console.log(hobbies1,hobbies2);