const getFactorial = (num) => {
    if (num > 20) {
        return -1
    }
    let arr = [];

    for (let i = 1; i <= num; i++) {
        arr[i] = i;
    }

    return  arr.reduce((prev, curr) => prev * curr, 1);
}

console.log(getFactorial(5))