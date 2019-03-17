const discord = require(`discord.js`);
const client = new discord.Client();

const prefix = '$';
const pi = Math.PI;
const tau = pi * 2;

function countDecimals(value) {
    if(Math.floor(value) !== value) {
        return value.toString().split(".")[1].length || 0;
    }
    return 0;
}

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

function pythagoreOtherSide(hypotenuse, knownSide) {
    return Math.round((Math.sqrt((hypotenuse * hypotenuse) - (knownSide * knownSide))) * 1000) / 1000;
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

function typeOfUnitError() {
    let embed = new discord.RichEmbed();
    embed.setTitle("Erreur: unité");
    embed.setColor("FF0000");
    embed.setDescription(`:x: les unités doivent être des lettres`);
    return embed;
}

function result(calculation, explanation, result, unit = "") {
    let embed = new discord.RichEmbed();
    embed.setTitle("Résultat:");
    embed.setColor("10DA5A");
    
    if(Number.isInteger(result) || countDecimals(result) <= 3) {
        embed.setDescription(calculation + " = " + explanation + " = " + result + unit);
    }

    else if(!Number.isInteger(result) && countDecimals(result) > 3) {
        embed.setDescription(calculation + " = " + explanation + " \u2243 " + result + unit);
    }

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

            else if(args[0] === "rectangle") {
                let length = parseFloat(args[1]);
                let width = parseFloat(args[2]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && args.length === 3) {
                    message.channel.send(result("A", length + " * " + width, rectangleArea(length, width)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
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

        else if(command === "v") {
            if(args[0] === "cube") {
                let arete = parseFloat(args[1]);

                if(!Number.isNaN(arete) && args.length === 2) {
                    message.channel.send(result("V", arete + " * " + arete + " * " + arete, cubeVolume(arete)));
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

                if(!Number.isNaN(length) && !Number.isNaN(width) && !Number.isNaN(height) && args.length === 4) {
                    message.channel.send(result("V", length + " * " + width + " * " + height, rectangleCuboidVolume(length, width, height)));
                }

                else if(args.length !== 4) {
                    message.channel.send(numberOfParamError(3));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "cylinder") {
                let radius = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) &&  args.length === 3) {
                    message.channel.send(result("V", "pi * (" + radius + " * " + radius + ") * " + height, cylinderVolume(radius, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "cone") {
                let radius = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) &&  args.length === 3) {
                    message.channel.send(result("V", "pi * (" + radius + " * " + radius + ") * " + height + " / 3", coneVolume(radius, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "pyramid_s") {
                let side = parseFloat(args[1]);
                let height = parseFloat(args[2]);

                if(!Number.isNaN(side) && !Number.isNaN(height) &&  args.length === 3) {
                    message.channel.send(result("V", "(" + side + " * " + side + ") * " + height + " / 3", squareBasedPyramidVolume(side, height)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "pyramid_r") {
                let length = parseFloat(args[1]);
                let width = parseFloat(args[2]);
                let height = parseFloat(args[3]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && !Number.isNaN(height) &&  args.length === 4) {
                    message.channel.send(result("V", "(" + length + " * " + width + ") * " + height + " / 3", rectangleBasedPyramidVolume(side, height)));
                }

                else if(args.length !== 4) {
                    message.channel.send(numberOfParamError(3));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }

            else if(args[0] === "sphere") {
                let radius = parseFloat(args[1]);

                if(!Number.isNaN(radius) && args.length === 2) {
                    message.channel.send(result("V", "(4 / 3) * pi * (" + radius + " * " + radius + " * " + radius + ")", sphereVolume(radius)));
                }

                else if(args.length !== 2) {
                    message.channel.send(numberOfParamError(1));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }
        }

        else if(command === "t") {
            if(args[0] === "pythagoreOtherSide") {
                let hypotenuse = parseFloat(args[1]);
                let knownSide = parseFloat(args[2]);

                if(!Number.isNaN(hypotenuse) && !Number.isNaN(knownSide) && args.length === 3) {
                    message.channel.send(result("Théorème de pythagore", "racine carrée de (" + hypotenuse + " * " + hypotenuse + ") - (" + knownSide + " * " + knownSide + ")", pythagoreOtherSide(hypotenuse, knownSide)));
                }

                else if(args.length !== 3) {
                    message.channel.send(numberOfParamError(2));
                }

                else message.channel.send(typeOfParamError("nombres"));
            }
        }
    }
});
