const isPowerOfTwo = (num) => {
    for (let i = 1; i <= num; i++) {
        if (Math.pow(2, i) === num) {
            return true;
        }
        if (Math.pow(2, i) > num){
            break;
        }
    }
    return false;
};

console.log(isPowerOfTwo(2048));