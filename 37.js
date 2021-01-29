const repeatString = (text, num) => {
    let newText = '';
    for (let i = 0; i < num; i++) {
        newText += text;
    }
    return newText;
}
console.log(repeatString('foo', 10));