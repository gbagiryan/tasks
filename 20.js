const calc = (text) => {
    const expression = text.split(' ');
    let x = '';
    let y;
    let sign;

    for (let i = 0; i < expression.length; i++) {
        if (isNaN(expression[i])) {
            sign = expression[i];
            y = expression.slice(i + 1).join('').trim();
            break;
        }
        x += expression[i]
    }

    x = Number(x);
    y = Number(y);
    if (y === 0) {
        return 'error'
    }
    switch (sign) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 'error'
    }
}

console.log(calc('52 / 2'))