const text = prompt('write something')

text.toLowerCase();
let textArr = text.split('');
for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] && i % 2 !== 0) {
        textArr[i] = textArr[i].toUpperCase()
    }
}
let newText = textArr.join('');


alert(newText)