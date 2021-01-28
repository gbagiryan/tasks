const getFactorial = (num) => {
    if (num > 20) {
        return -1
    }
    let factor = 1;

    for (let i = 1; i <= num; i++) {
        factor *= i;
    }

    return factor;
}

console.log(getFactorial(5))