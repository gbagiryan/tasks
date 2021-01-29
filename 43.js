const getFilledArray = (value, num)=>{
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(getFilledArray('str', 3));