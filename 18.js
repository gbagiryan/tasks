const text = prompt('write something');

if (text.length > 20) {
    alert(text);
} else {
    text.toLowerCase();
    let textArr = text.split('');
    for (let i = 0; i < textArr.length; i++) {
        if (i % 2 !== 0) {
            textArr[i] = textArr[i].toUpperCase()
        }
    }
    let newText = textArr.join('');

    alert(newText);
}