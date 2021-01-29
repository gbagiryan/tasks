const map = (arr, cb) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    ;
    return newArr;
};

console.log(map([1, 2, 3], function (num) {
    return num * 2
}));