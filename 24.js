const circleInfo = (r) => {
    const circleInfoObj = {
        area: Math.pow(r, 2) * Math.PI,
        circ: 2 * r * Math.PI
    }


    return circleInfoObj
}

console.log(circleInfo(5));