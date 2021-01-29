const sum = (a) => {
    return (b) => b + a;
}

console.log(sum(5)(7));