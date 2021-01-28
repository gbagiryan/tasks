const triangleArea = arr => {
    const Xa = arr[0][0];
    const Ya = arr[0][1];
    const Xb = arr[1][0];
    const Yb = arr[1][1];
    const Xc = arr[2][0];
    const Yc = arr[2][1];

    const result = Math.abs((Xa * (Yb - Yc) - Xb * (Ya - Yc) + Xc * (Ya - Yb)) / 2);
    return result % 2 === 0 ? result : parseFloat(`${result}`).toFixed(1);
};

console.log(triangleArea([[1, 1], [1, 3], [3, 1],]));