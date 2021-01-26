//10
const makePyramid = height => {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row = row + '*';
    }
    console.log(row);
  }
};

makePyramid(5);
