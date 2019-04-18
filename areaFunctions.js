function squareArea(side) {
    return Math.round((side * side) * 1000) / 1000;
}

function rectangleArea(length, width) {
    return Math.round((length * width) * 1000) / 1000;
}

function diskArea(radius) {
    return Math.round(((radius * radius) * pi) * 1000) / 1000;
}

function parallelogramArea(base, height) {
    return Math.round((base * height) * 1000) / 1000;
}

function triangleArea(base, height) {
    return Math.round(((base * height) / 2) * 1000) / 1000;
}

function trapezeArea(base1, base2, height) {
    return Math.round((((base1 + base2) * height) / 2) * 1000) / 1000;
}

function diamondArea(diagonal1, diagonal2) {
    return Math.round((diagonal1 * diagonal2 / 2) * 1000) / 1000;
}

function sphereArea(radius) {
    return Math.round(((radius * radius) * (pi * 4)) * 1000) / 1000;
}

function coneArea(radius, height) {
    return Math.round((Math.sqrt((radius * radius) + (height * height)) * pi * radius) * 1000) / 1000;
}

function cubeArea(arete) {
    return Math.round(((arete * arete) * 6) * 1000) / 1000;
}

function rectangleCuboidArea(length, width, height) {
    return Math.round(((2 * length * width) + (2 * length * height) + (2 * width * height)) * 1000) / 1000;
}

function cylinderArea(radius, height) {
    return Math.round((2 * pi * radius * height) * 1000) / 1000;
}

function squareBasedPyramidArea(baseSide, height) {
    return Math.round(((baseSide * 4) * Math.sqrt((height * height) + (baseSide / 2) * (baseSide / 2)) / 2) * 1000) / 1000;
}

module.exports = {
    squareArea : squareArea,
    rectangleArea : rectangleArea,
    diskArea : diskArea,
    parallelogramArea : parallelogramArea,
    triangleArea : triangleArea,
    trapezeArea : trapezeArea,
    diamondArea : diamondArea,
    sphereArea : sphereArea,
    coneArea : coneArea,
    cubeArea : cubeArea,
    rectangleCuboidArea : rectangleCuboidArea,
    cylinderArea : cylinderArea,
    squareBasedPyramidArea : squareBasedPyramidArea
}
