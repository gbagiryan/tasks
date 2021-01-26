//7
const canBeTriangle = (x, y, z) => {
  if(x<y+z && y<x+z && z<x+y){
    return true
  }
  return false
};

console.log(canBeTriangle(10, 10, 10));
