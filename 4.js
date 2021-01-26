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