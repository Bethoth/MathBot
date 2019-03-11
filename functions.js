require(`./constants`);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function squarePerimeter(side) {
    return side * 4;
}

function rectanglePerimeter(length, width) {
    return (length * 2) + (width * 2);
}

function circlePerimeter(radius) {
    return radius * 2 * pi;
}

function trianglePerimetet(base, side1, side2) {
    return base + side1 + side2;
}

function parallelogramPerimeter(side1, side2) {
    return (side1 * 2) + (side2 * 2);
}

function trapezePerimeter(base1, base2, side1, side2) {
    return base1 + base2 + side1 + side2;
}

function diamondPerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side * side;
}

function rectangleArea(length, width) {
    return length * width;
}

function diskArea(radius) {
    return (radius * radius) * pi;
}

function parallelogrammArea(base, height) {
    return base * height;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

function trapezeArea(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}

function diamondArea(diagonal1, diagonal2) {
    return diagonal1 * diagonal2 / 2;
}

function sphereArea(radius) {
    return (radius * radius) * (pi * 4);
}

function coneArea(radius, height) {
    return Math.sqrt((radius * radius) + (height * height)) * pi * radius;
}

function cubeArea(arete) {
    return (arete * arete) * 6;
}

function rectangleCuboidArea(length, width, height) {
    return (2 * length * width) + (2 * length * height) + (2 * width * height);
}

function cylinderArea(radius, height) {
    return 2 * pi * radius * height;
}

function squareBasedPyramidArea(baseSide, height) {
    return (baseSide * 4) * Math.sqrt((height * height) + (baseSide / 2) * (baseSide / 2)) / 2;
}

function cubeVolume(arete) {
    return Math.pow(arete, 3);
}

function rectangleCuboidVolume(length, width, height) {
    return length * width * height;
}

function cylinderVolume(radius, height) {
    pi * (radius * radius) * height;
}

function coneVolume(radius, height) {
    return (pi * (radius * radius) * height) / 3;
}

function squareBasedPyramidVolume(side, height) {
    return ((side * side) * height) / 3;
}

function rectangleBasedPyramidVolume(length, width, height) {
    return ((length * width) * height) / 3;
}

function sphereVolume(radius) {
    return (4.0 / 3.0) * pi * Math.pow(radius, 3);
}

function pythagoreOtherSide(hypotenuse, knownSide) {
    Math.sqrt((hypotenuse * hypotenuse) - (knownSide * knownSide));
}

function thalesWithUnknownNumerator(knownFractionNumerator, knownFractionDenominator, knownDenominator) {
    return (knownFractionNumerator * knownDenominator) / knownFractionDenominator;
}

function thalesWithUnknownDenominator(knownFractionNumerator, knownFractionDenominator, knownNumerator) {
    return (knownFractionDenominator * knownNumerator) / knownFractionNumerator;
}
