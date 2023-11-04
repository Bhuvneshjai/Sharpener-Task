var name = "Bhuvnesh Jain";
var age = 22;
var hobbies = true;

const summarizeUser = function (hasname, hasage, hashobbies) {
    return (
        'Name is ' + hasname +
        ', Age is ' + hasage +
        ' and Hobbies is ' + hashobbies
    );
}
console.log(summarizeUser(name, age, hobbies));

const summarizeUser1 =  (hasname, hasage, hashobbies) => {
    return (
        'Name is ' + hasname +
        ', Age is ' + hasage +
        ' and Hobbies is ' + hashobbies
    );
}
console.log(summarizeUser1(name, age, hobbies));

const add = (a,b) => {
    return a+b;
}
console.log(add(3,4));

const add1 = (a,b) => a+b;
console.log(add1(2,3));

const addOne = a => a+1;
console.log(addOne(2));

const addOne1 = () => 1+1;
console.log(addOne1());