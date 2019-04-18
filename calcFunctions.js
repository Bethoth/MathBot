function add(a, b) {
    return Math.round((a + b) * 1000) / 1000;
}

function subtract(a, b) {
    return Math.round((a - b) * 1000) / 1000;
}

function multiply(a, b) {
    return Math.round((a * b) * 1000) / 1000;
}

function divide(a, b) {
    return Math.round((a / b) * 1000) / 1000;
}

function modulo(a, b) {
    return Math.round((a % b) * 1000) / 1000;
}

module.exports = {
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide,
    modulo : modulo
}