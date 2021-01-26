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
