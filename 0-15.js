//0
const getTriangleAngle = (x, y) => {
  return 180 - (x + y);
};

console.log(getTriangleAngle(45, 45));

//1
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
console.log(isEven(20));

//2
const isOdd = num => {
  if (num % 2 !== 0 && num > 100) {
    return true;
  }
  return false;
};
console.log(isOdd(57));

//3
const isTeen = num => {
  if (num >= 13 && num <= 19) {
    return 'Hi teenager';
  } else if (num === 25) {
    return "Hi,I'm 25 too";
  }else{
  return 'Hello';
  }
};
console.log(isTeen(15));


//4
const getLongest = textArr => {
  let longest = '';
  for (const word of textArr) {
    if(word.length>longest.length){
      longest=word;
    }
  }
  return longest
};
console.log(getLongest(['I','Love','js']));

//5
const getStrings = arr => {
  stringArr = [];

  for (const el of arr) {
    if (el.__proto__ === String.prototype) {
      stringArr.push(el);
    }
  }
  return stringArr;
};

console.log(getStrings([54,'a word', true, 'another word']));

//6
const joinArrs = (arr1, arr2) => {
  joinedArr = [];
  
  for (let i = 0; i < arr1.length; i++) {

    if(i===Math.floor(arr1.length/2)){
      joinedArr.push(...arr2)
    }
        joinedArr.push(arr1[i]);
  }

  return joinedArr;
};

console.log(joinArrs([0, 1, 2, 7, 8, 9, 10], [3, 4, 5, 6]));

//7
const canBeTriangle = (x, y, z) => {
  if(x<y+z && y<x+z && z<x+y){
    return true
  }
  return false
};

console.log(canBeTriangle(10, 10, 10));

//8
const isPrime = num => {
  if (num > 1000) {
    return 'too big number';
  } else if (num <= 1) {
    return 'neither prime nor composite';
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num !== i) {
      return 'composite';
    }
    return 'prime';
  }
};

console.log(isPrime(7))

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

//10
const makePyramid = height => {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row = row + '*';
    }
    console.log(row);
  }
};

makePyramid(5);

//11
const calc = num => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result;
};
console.log(calc(12));

//12
const phoneNumbers = [];
let newNum;
while (newNum !== 'stop') {
  newNum = prompt('Enter phone number');
  if (!newNum) {
    alert('try again')
  } else if (phoneNumbers.includes(newNum)) {
    alert('already exists');
  } else {
    phoneNumbers.push(newNum);
    alert('Thank you');
    break;
  }
}

//13
const getMutual = (arr1, arr2) => {
  let common = 0;
  const temps = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !temps.includes(arr1[j])) {
        common++;
        temps.push(arr1[j]);
        break;
      }
    }
  }

  return common;
};

console.log(getMutual(['a', 'a', 'b', 'c', 'c'], ['a', 'd', 'c', 'a', 'a']));

//14
const commonLetter = arr => {
  let most = arr[0];
  let count = 1;
  let final = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > final) {
      final = count;
      most = arr[i];
    }
    count = 1;
  }
  return most;
};

console.log(commonLetter(['a', 'b', 'b', 'c',]));

//15
let x = prompt('Enter x');
let y = prompt('Enter y');

if ((x % 2 === 0 && y % 2 === 0) || (x % 2 !== 0 && y % 2 !== 0)) {
  alert('white');
} else  {
  alert('black');
} 

//18
const text = prompt('write something')

text.toLowerCase();
let textArr = text.split('');
for (let i = 0; i < textArr.length; i++) {
  if (textArr[i] && i % 2 !== 0) {
    textArr[i] = textArr[i].toUpperCase()
  }
}
let newText = textArr.join('');


alert(newText)

//19
const getFactorial = (num) => {
  if (num > 20) {
    return -1
  }
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr[i] = i;
  }

  return  arr.reduce((prev, curr) => prev * curr, 1);
}

console.log(getFactorial(5))

//20
const calc = (text) => {
  const expression = text.split(' ');

  const first = expression[0];
  const action = expression[1];
  const second = expression[2];

  if (+second === 0) {
    return 'error'
  }
  switch (action) {
    case '+':
      return first + second
      break;
    case '-':
      return first - second
      break;
    case '*':
      return first * second
      break;
    case '/':
      return first / second
      break;
    default:
      return 'error'

  }
}

console.log(calc('54 / 0'))