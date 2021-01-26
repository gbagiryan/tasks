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