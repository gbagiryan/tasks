const isPalindrome = (text) => {
    text.split('');
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('madam'));