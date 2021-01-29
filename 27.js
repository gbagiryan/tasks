const getLCM = (a, b) => {
    for (let i = 1; i > 0; i++) {
        if (i % a === 0 && i % b === 0) {
            return i;
        }
    }
};

console.log(getLCM(16, 3));