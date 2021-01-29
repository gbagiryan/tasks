const allLongestStrings = (arr) => {
    let newArr = [];
    let previousCount = 0;
    let lengthCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lengthCount) {
            newArr = [arr[i]];
            lengthCount = arr[i].length;
        } else if (arr[i].length === lengthCount) {
            newArr.push(arr[i]);
        }
    }
    

    return newArr;
};

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));