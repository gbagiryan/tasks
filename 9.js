//9
const sayHi = person => {
  if (person.name && person.age) {
    return `Hi my name is ${person.name}, I am ${person.age} years old`;
  } else {
    return 'Hi, what is your name?';
  }
};

console.log(sayHi({name: 'Ann', age: 27}));
console.log(sayHi({firstName: 'John'}));
