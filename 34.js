const getSymbolsCount = (text, symbol) => {
    textArr = text.toLowerCase().split('');
    newArr = textArr.filter((el) => el === symbol);
    return newArr.length;
};

console.log(getSymbolsCount('Ooo my god', 'o'));