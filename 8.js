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