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
