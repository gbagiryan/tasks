const vowelCount = (word) => {
    const vowels = ['ա', 'է', 'ե', 'ը', 'ի', 'օ', 'ո'];
    let count=0;

    word.split('');
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])){
            ++count;
        }
    }
    return count;
}

console.log(vowelCount('բառակապակցություն'));