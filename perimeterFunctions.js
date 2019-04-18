function squarePerimeter(side) {
    return Math.round((side * 4) * 1000) / 1000;
}

function rectanglePerimeter(length, width) {
    return Math.round(((length * 2) + (width * 2)) * 1000) / 1000;
}

function circlePerimeter(radius) {
    return Math.round((radius * 2 * pi) * 1000) / 1000;
}

function trianglePerimeter(base, side1, side2) {
    return Math.round((base + side1 + side2) * 1000) / 1000;
}

function parallelogramPerimeter(side1, side2) {
    return Math.round(((side1 * 2) + (side2 * 2)) * 1000) / 1000;
}

function trapezePerimeter(base1, base2, side1, side2) {
    return Math.round((base1 + base2 + side1 + side2) * 1000) / 1000;
}

function diamondPerimeter(side) {
    return Math.round((side * 4) * 1000) / 1000;
}

module.exports = {
    squarePerimeter : squarePerimeter,
    rectanglePerimeter : rectanglePerimeter,
    circlePerimeter : circlePerimeter,
    trianglePerimeter : trianglePerimeter,
    parallelogramPerimeter : parallelogramPerimeter,
    trapezePerimeter : trapezePerimeter,
    diamondPerimeter : diamondPerimeter
}