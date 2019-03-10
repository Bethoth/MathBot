//To do :
// add the area functions of the following shapes : square, rectangle, circle, triangle, parallelogramm, trapeze, diamond, cube, rectangle cuboid, sphere
// add the volume functions of the following shapes : cube, rectangle cuboid, sphere, square based pyramid, rectangle based pyramid

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
