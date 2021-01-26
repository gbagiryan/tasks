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