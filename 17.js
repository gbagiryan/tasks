const numberInfo = (arr) => {
    const numObj = {
        min: arr[0],
        max: arr[0],
        mode: [],
        mean: 0
    }
    let previousCount = 0;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > numObj.max) {
            numObj.max = arr[i]
        }
        if (arr[i] < numObj.min) {
            numObj.min = arr[i]
        }
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter > previousCount) {
            numObj.mode = [arr[i]];
            previousCount = counter;

        } else if (counter === previousCount) {
            numObj.mode.push(arr[i])
        }
        counter = 0;

        numObj.mean += arr[i];
    }

    numObj.mean /= arr.length;
    return numObj;
}

console.log(numberInfo([1, 2, 3, 45, 6, 3, 6]));