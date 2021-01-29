const getGCD = (a, b) => {
    const highest = a > b ? a : b
    let count;

    for (let i = 1; i <= highest; i++) {
        if (a % i === 0 && b % i === 0) {
            count=i;
        }
    }
    return count;
}

console.log(getGCD(16, 36));