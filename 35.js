const isFib = (arr) => {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + arr[i - 2]) {
            return true;
        }
    }
    return false;
}

console.log(isFib([1, 3, 5, 8, 235, 34, 5]));