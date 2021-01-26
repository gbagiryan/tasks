//2
const isOdd = num => {
  if (num % 2 !== 0 && num > 100) {
    return true;
  }
  return false;
};
console.log(isOdd(57));