// In this object, the greet method is defined as an arrow function. Arrow functions do not have their own this context and will inherit the this from the surrounding scope. In this case, this.name will not refer to the name property of the person object. Instead, it will likely be undefined or refer to the name property of the outer scope, which might not exist.
const person = {
  name: "Max",
  age: 22,
  greet: () => {
    console.log("Hey ! I am " + this.name);
  },
};
person.greet();

// In this object, the greet method is defined as a regular function using the function keyword. The this inside the function will correctly refer to the person1 object, so it will log "Hey! I am Bhuvi" when person1.greet() is called.
const person1 = {
  name: "Bhuvi",
  age: 21,
  greet: function () {
    console.log("Hey ! I am " + this.name);
  },
};
person1.greet();

// In this object, the greet method is defined using a shorthand method syntax. This syntax automatically binds the this keyword to the object it is defined within. So, when person2.greet() is called, it will correctly log "Hey! I am Prabhi" because this refers to the person2 object.
const person2 = {
  name: "Prabhi",
  age: 20,
  greet() {
    console.log("Hey ! I am " + this.name);
  },
};
person2.greet();

// In summary, the main difference is in how the greet method is defined, which affects how the this keyword behaves within the method. Arrow functions (person) may not work as expected when using this within methods, while regular functions (person1) and the shorthand method syntax (person2) correctly bind this to the object and work as intended.
