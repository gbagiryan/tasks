const calc = (text) => {
    const expression = text.split(' ');

    const first = expression[0];
    const action = expression[1];
    const second = expression[2];

    if (+second === 0) {
        return 'error'
    }
    switch (action) {
        case '+':
            return first + second
            break;
        case '-':
            return first - second
            break;
        case '*':
            return first * second
            break;
        case '/':
            return first / second
            break;
        default:
            return 'error'

    }
}

console.log(calc('54 / 0'))