function cubeVolume(arete) {
    return Math.round((Math.pow(arete, 3)) * 1000) / 1000;
}

function rectangleCuboidVolume(length, width, height) {
    return Math.round((length * width * height) * 1000) / 1000;
}

function cylinderVolume(radius, height) {
    return Math.round((pi * (radius * radius) * height) * 1000) / 1000;
}

function coneVolume(radius, height) {
    return Math.round(((pi * (radius * radius) * height) / 3) * 1000) / 1000;
}

function squareBasedPyramidVolume(side, height) {
    return Math.round((((side * side) * height) / 3) * 1000) / 1000;
}

function rectangleBasedPyramidVolume(length, width, height) {
    return Math.round((((length * width) * height) / 3) * 1000) / 1000;
}

function sphereVolume(radius) {
    return Math.round(((4.0 / 3.0) * pi * Math.pow(radius, 3)) * 1000) / 1000;
}

module.exports = {
    cubeVolume : cubeVolume,
    rectangleCuboidVolume : rectangleCuboidVolume,
    cylinderVolume : cylinderVolume,
    coneVolume : coneVolume,
    squareBasedPyramidVolume : squareBasedPyramidVolume,
    rectangleBasedPyramidVolume : rectangleBasedPyramidVolume,
    sphereVolume : sphereVolume
}