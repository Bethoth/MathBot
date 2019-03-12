const discord = require(`discord.js`);
const client = new discord.Client();

const prefix = '$';
const pi = 3.14159265359;
const tau = pi * 2;

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

function trianglePerimeter(base, side1, side2) {
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

function parallelogramArea(base, height) {
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
    return pi * (radius * radius) * height;
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

function numberOfParamError(expectedNumber) {
    let embed = new discord.RichEmbed();
    embed.setTitle(`Erreur: nombre de paramètres`);
    embed.setDescription(`:x: Cette commande nécessite ` + expectedNumber + ` paramètres.`);
    embed.setColor(`FF0000`);
    return embed;
}

function typeOfParamError(expectedType) {
    let embed = new discord.RichEmbed();
    embed.setTitle(`Erreur: types des paramètres`);
    embed.setColor("FF0000");
    embed.setDescription(`:x: veuillez n'utiliser que des ` + expectedType);
    return embed;
}

function result(calculation, explanation, result) {
    let embed = new discord.RichEmbed();
    embed.setTitle("Résultat:");
    embed.setColor("10DA5A");
    embed.setDescription(calculation + " = " + explanation + " = " + result);
    return embed;
}

client.on(`ready`, () => {
    console.log(`I'm ready !`);
});

client.on(`message`, message => {
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command === "calc") {
            if(args[1] === '+') {
                let a = parseFloat(args[0]);
                let b = parseFloat(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3) {
                    message.channel.send(result("Addition", a + " + " + b, add(a, b)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[1] === '-') {
                let a = parseFloat(args[0]);
                let b = parseFloat(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3) {
                    message.channel.send(result("Soustraction", a + " - " + b, subtract(a, b)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[1] === '*') {
                let a = parseFloat(args[0]);
                let b = parseFloat(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3) {
                    message.channel.send(result("Multiplication", a + " * " + b, multiply(a, b)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[1] === '/') {
                let a = parseFloat(args[0]);
                let b = parseFloat(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3) {
                    message.channel.send(result("Division", a + " / " + b, divide(a, b)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }
        }

        else if(command === "p") {
            if(args[0] === "square") {
                let side = parseFloat(args[1]);

                if(!Number.isNaN(side) && args.length === 2) {
                    message.channel.send(result("P", side + " * 4", squarePerimeter(side)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "rectangle") {
                let length = parseFloat(args[1]);
                let width = parseFloat(args[2]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && args.length === 3) {
                    message.channel.send(result("P", "(" + length + " * 2) + (" + width + " * 2)", rectanglePerimeter(length, width)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "circle") {
                let radius = parseFloat(args[1]);

                if(!Number.isNaN(radius) && args.length === 2) {
                    message.channel.send(result("P", "pi * 2 * " + radius, circlePerimeter(radius)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "triangle") {
                let base = parseFloat(args[1]);
                let side1 = parseFloat(args[2]);
                let side2 = parseFloat(args[3]);

                if(!Number.isNaN(base) && !Number.isNaN(side1) && !Number.isNaN(side2) && args.length === 4) {
                    message.channel.send(result("P", base + " + " + side1 + " + " + side2, trianglePerimeter(base, side1, side2)));
                }

                else if(args.length !== 4) {
                    message.channel.send(numberOfParamError(3));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "parallelogram") {
                let side1 = parseFloat(args[1]);
                let side2 = parseFloat(args[2]);

                if(!Number.isNaN(side1) && !Number.isNaN(side2) && args.length === 3) {
                    message.channel.send(result("P", "(" + side1 + " * 2) + (" + side2 + " * 2)", parallelogramPerimeter(side1, side2)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "trapeze") {
                let base1 = parseFloat(args[1]);
                let base2 = parseFloat(args[2]);
                let side1 = parseFloat(args[3]);
                let side2 = parseFloat(args[4]);

                if(!Number.isNaN(base1) && !Number.isNaN(base2) && !Number.isNaN(side1) && !Number.isNaN(side2) && args.length === 5) {
                    message.channel.send(result("P", base1 + " + " + base2 + " + " + side1 + " + " + side2, trapezePerimeter(base1, base2, side1, side2)));
                }

                else if(args.length !== 5) {
                    message.channel.send(numberOfParamError(4));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "diamond") {
                let side = parseFloat(args[1]);

                if(!Number.isNaN(side) && args.length === 2) {
                    message.channel.send(result("P", side + " * 4", diamondPerimeter(side)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }
        }

        else if(command === "a") {
            if(args[0] === "square") {
                let side = parseFloat(args[1]);

                if(!Number.isNaN(side) && args.length === 2) {
                    message.channel.send(result("A", side + " * " + side, squareArea(side)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "disk") {
                let radius = parseFloat(args[1]);

                if(!Number.isNaN(radius) && args.length === 2) {
                    message.channel.send(result("A", "(" + radius + " * " + radius + ") * pi", diskArea(radius)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "parallelogram") {
                let base = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(base) && !Number.isNaN(height) && args.length === 3) {
                    message.channel.send(result("A", base + " * " + height, parallelogramArea(base, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "triangle") {
                let base = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(base) && !Number.isNaN(height) && args.length === 3) {
                    message.channel.send(result("A", "(" + base + " * " + height + ") / 2", triangleArea(base, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "trapeze") {
                let base1 = parseFloat(args[1]);
                let base2 = parseFloat(args[2]);
                let height = parseFloat(args[3]);

                if(!Number.isNaN(base1) && !Number.isNaN(base2) && !Number.isNaN(height) && args.length === 4) {
                    message.channel.send(result("A", "((" + base1 + " + " + base2 + ") * " + height + ") / 2", trapezeArea(base1, base2, height)));
                }

                else if(args.length !== 4) {
                    message.channel.send(numberOfParamError(3));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "diamond") {
                let diagonal1 = parseFloat(args[1]);
                let diagonal2 = parseFloat(args[2]);

                if(!Number.isNaN(diagonal1) && !Number.isNaN(diagonal2) && args.length === 3) {
                    message.channel.send(result("A", diagonal1 + " * " + diagonal2 + " / 2", diamondArea(diagonal1, diagonal2)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "sphere") {
                let radius = parseFloat(args[1]);

                if(!Number.isNaN(radius) && args.length === 2) {
                    message.channel.send(result("A", "(" + radius + " * " + radius + ") * (pi * 4)", sphereArea(radius)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "cone") {
                let radius = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) && args.length === 3) {
                    message.channel.send(result("A", "racine carrée de ((" + radius + " * " + radius + ") + (" + height + " * " + height + ")) * pi * " + radius, coneArea(radius, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "cube") {
                let arete = parseFloat(args[1]);

                if(!Number.isNaN(arete) && args.length === 1) {
                    message.channel.send(result("A", arete + " * " + arete + " * 6", cubeArea(arete)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "r_c") {
                let length = parseFloat(args[1]);
                let width = parseFloat(args[2]);
                let height = parseFloat(args[3]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && !Number.isNaN(height) && args.length === 3) {
                    message.channel.send(result("A", "(" + length + " * " + width + ") + (" + width + " * " + height + ") + (" + length + " * " + width + ")", rectangleCuboidArea(length, width, height)));
                }

                else if(args.length !== 4) {
                    message.channel.send(numberOfParamError(3));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "cylinder") {
                let radius = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) && args.length === 2) {
                    message.channel.send(result("A", "pi * (" + radius + " * " + radius + ") * " + height, cylinderArea(radius, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "pyramid_s") {
                let baseSide = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(baseSide) && !Number.isNaN(height) && args.length === 2) {
                    message.channel.send(result("A", "(" + baseSide + " * 4 * racine carrée de ((" + height + " * " + height + ") + (" + baseSide + " / 2) * (" + baseSide + " / 2)) / 2", squareBasedPyramidArea(baseSide, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }
        }
    }
});
