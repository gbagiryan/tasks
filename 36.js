const checkSumEquality = (arr) => {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }

    return even > odd ? true : false;
}

console.log(checkSumEquality([1, 3, 5, 8, 235, 34, 5]));