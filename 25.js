const sortArticles = (arr) => {
    const sortByYear = (a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            return 0
        }
    }

    return arr.sort(sortByYear);
}

const articles = [
    {
        title: 'Veganism',
        author: 'Poghos',
        year: 2005
    },
    {
        title: 'Modern Philosophy',
        author: 'Petros',
        year: 2019
    },
    {
        title: 'The Invention of the Internet',
        author: 'Karapet',
        year: 1995
    }
];

console.log(sortArticles(articles));