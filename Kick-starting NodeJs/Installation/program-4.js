const person = {
    name : "Max",
    age : 22,
    greet : () => {
        console.log("Hey ! I am "+this.name);
    }
}
person.greet();

const person1 = {
    name : "Bhuvi",
    age : 21,
    greet : function() {
        console.log("Hey ! I am "+this.name);
    }
}
person1.greet();

const person2 = {
    name : "Prabhi",
    age : 20,
    greet() {
        console.log("Hey ! I am "+this.name);
    }
}
person2.greet();