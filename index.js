// Object
let person = {
    name: 'Allis',
    age: 30
};

// Dot Notation
person.name = 'Eskil';

// Bracket Notation
person['name'] = 'Mary'

// Array
let selectedColours = ['red', 'blue', 'white'];
selectedColours[3] = 1;
console.log(selectedColours.length);

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
};

// Calculating a value
function square(number) {
    return number * number
};

greet('Allis', 'Wynnsund');


console.log(square(8));