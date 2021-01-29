const calcDist = (point1, point2) => {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))
}


const point1 = {
    x: 1,
    y: -4
};
const point2 = {
    x: 0,
    y: -4
};
console.log(calcDist(point1, point2));