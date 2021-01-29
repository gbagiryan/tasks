const sortById = (arr) => {
    const sortByYear = (a, b) => {
        if (a.id > b.id) {
            return 1;
        } else if (a.id < b.id) {
            return -1;
        } else {
            return 0
        }
    }

    return arr.sort(sortByYear);
}

const arr = [
    {
        name: 'Davit',
        id: 8
    },
    {
        name: 'Lina',
        id: 1
    },
    {
        name: 'Narine',
        id: 3
    }
];

console.log(sortById(arr));