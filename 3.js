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
