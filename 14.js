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
