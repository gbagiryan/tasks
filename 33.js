const mutateTheArray = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let a = i > 0 ? arr[i - 1] : 0;
        let b = i < arr.length - 1 ? arr[i + 1] : 0;
        newArr.push(arr[i] + a + b);
    }
    return newArr;
}
console.log(mutateTheArray([4, 0, 1, -2, 3]));