//Array Methods

const arr = [1, 2, 3, 4, 5, 6];


//map
const map = (arr, cb) => {
    const newArr = [];
    for (const arrEl of arr) {
        newArr.push(cb(arrEl))
    }
    return newArr
}


const mappedArr = map(arr, (el) => ++el);
console.log(mappedArr);
//**********************************************

//ForEach
const forEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

forEach(arr, (el) => console.log(el));
//**********************************************

//Every
const every = (arr, cb) => {
    for (const arrEl of arr) {
        if (!cb(arrEl)) {
            return false;
        }
    }
    return true;
}

const everyResult = every(arr, (el) => el % 2 === 0)
console.log(everyResult)
//**********************************************

//Filter
const filter = (arr, cb) => {
    const newArr = [];
    for (const arrEl of arr) {
        if (cb(arrEl)) {
            newArr.push(arrEl)
        }
    }
    return newArr
}

const filteredArr = filter(arr, (el) => el % 2 === 0);
console.log(filteredArr);
//**********************************************

//Reduce
const reduce = (arr, cb, defVal) => {
    let prev;
    let i = 0
    if (defVal) {
        prev = defVal;
    } else {
        prev = arr[0];
        i = 1;
    }
    let result;
    for (i; i < arr.length; i++) {
        result = cb(prev, arr[i]);
        prev = result;
    }
    return result;
}

const reducedArr = reduce(arr, (prev, curr) => prev + curr);
console.log(reducedArr);