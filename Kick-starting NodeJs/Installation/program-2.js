var name = "Bhuvnesh Jain";
var age = 22;
var hobbies = true;

function summarizeUser(hasname, hasage, hashobbies) {
    return (
        'Name is ' + hasname +
        ', Age is ' + hasage +
        ' and Hobbies is ' + hashobbies
    );
}

console.log(summarizeUser(name, age, hobbies));