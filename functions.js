//To do :
// add the perimeter functions of the following shapes : parallelogramm, trapeze, diamond
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
