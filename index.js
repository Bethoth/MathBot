const discord = require(`discord.js`);
const client = new discord.Client();

const embeds = require("./embeds");
const calcFunctions = require("./calcFunctions");
const perimeterFunctions = require("./perimeterFunctions");
const areaFunctions = require("./areaFunctions");
const volumeFunctions = require("./volumeFunctions");
const theoremFunctions = require("./theoremFunctions");
const constants = require("./constants");
const errorFunctions = require("./errorFunctions");

function result(calculation, explanation, result, unit = "") {
    let embed = new discord.RichEmbed();
    embed.setTitle(`Résultat:`);
    embed.setColor("10DA5A");
    if(result < Number.MAX_SAFE_INTEGER) {
        embed.setDescription(calculation + " = " + explanation + " = " + result + unit);
    }

    else if(result >= Number.MAX_SAFE_INTEGER) {
        let embed = new discord.RichEmbed();
        embed.setTitle(`Erreur: Résultat trop grand`);
        embed.setColor("FF0000");
        embed.setDescription(`:x: Le résultat de votre calcul est trop élevé pour être affiché correctement.`);
        return embed;
    }
    return embed;
}

client.on(`ready`, () => {
    console.log(`I'm ready !`);
    client.user.setActivity("préfixe : " + constants.lPrefix + " | " + constants.lPrefix + " help");
});

client.on(`message`, message => {
    if(message.content.startsWith(constants.lPrefix) || message.content.startsWith(constants.uPrefix)) {
        const args = message.content.slice(constants.lPrefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command === "calc" || command === "compute" || command === "c") {
            if(args[1] === '+') {
                let a = Number(args[0]);
                let b = Number(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3 && a < Number.MAX_SAFE_INTEGER && b < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Addition", a + " + " + b, calcFunctions.add(a, b)));
                }

                else if(a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[1] === '-') {
                let a = Number(args[0]);
                let b = Number(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3 && a < Number.MAX_SAFE_INTEGER && b < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Soustraction", a + " - " + b, calcFunctions.subtract(a, b)));
                }

                else if(a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[1] === '*') {
                let a = Number(args[0]);
                let b = Number(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3 && a < Number.MAX_SAFE_INTEGER && b < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Multiplication", a + " * " + b, calcFunctions.multiply(a, b)));
                }

                else if(a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[1] === '/') {
                let a = Number(args[0]);
                let b = Number(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3 && a < Number.MAX_SAFE_INTEGER && b < Number.MAX_SAFE_INTEGER && b !== 0) {
                    message.channel.send(result("Division", a + " / " + b, calcFunctions.divide(a, b)));
                }

                else if(a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(b === 0) {
                    message.channel.send(errorFunctions.bZDE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[1] === '%') {
                let a = Number(args[0]);
                let b = Number(args[2]);

                if(!Number.isNaN(a) && !Number.isNaN(b) && args.length === 3 && a < Number.MAX_SAFE_INTEGER && b < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Modulo", a + " % " + b, calcFunctions.modulo(a, b)));
                }

                else if(a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
        }

        else if(command === "p" || command === "perimeter") {
            if(args[0] === "square") {
                let side = Number(args[1]);

                if(!Number.isNaN(side) && args.length === 2 && side < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", side + " * 4", perimeterFunctions.squarePerimeter(side)));
                }

                else if(side > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "rectangle") {
                let length = Number(args[1]);
                let width = Number(args[2]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && args.length === 3 && length < Number.MAX_SAFE_INTEGER && width < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", "(" + length + " * 2) + (" + width + " * 2)", perimeterFunctions.rectanglePerimeter(length, width)));
                }

                else if(length > Number.MAX_SAFE_INTEGER || width > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "circle") {
                let radius = Number(args[1]);

                if(!Number.isNaN(radius) && args.length === 2 && radius < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", "\u03c0 * 2 * " + radius, perimeterFunctions.circlePerimeter(radius)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "triangle") {
                let base = Number(args[1]);
                let side1 = Number(args[2]);
                let side2 = Number(args[3]);

                if(!Number.isNaN(base) && !Number.isNaN(side1) && !Number.isNaN(side2) && args.length === 4 && base < Number.MAX_SAFE_INTEGER && side1 < Number.MAX_SAFE_INTEGER && side2 < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", base + " + " + side1 + " + " + side2, perimeterFunctions.trianglePerimeter(base, side1, side2)));
                }

                else if(base > Number.MAX_SAFE_INTEGER || side1 > Number.MAX_SAFE_INTEGER || side2 > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "parallelogram" || args[0] === "para") {
                let side1 = Number(args[1]);
                let side2 = Number(args[2]);

                if(!Number.isNaN(side1) && !Number.isNaN(side2) && args.length === 3 && side1 < Number.MAX_SAFE_INTEGER && side2 < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", "(" + side1 + " * 2) + (" + side2 + " * 2)", perimeterFunctions.parallelogramPerimeter(side1, side2)));
                }

                else if(side1 > Number.MAX_SAFE_INTEGER || side2 > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "trapeze") {
                let base1 = Number(args[1]);
                let base2 = Number(args[2]);
                let side1 = Number(args[3]);
                let side2 = Number(args[4]);

                if(!Number.isNaN(base1) && !Number.isNaN(base2) && !Number.isNaN(side1) && !Number.isNaN(side2) && args.length === 5 && base1 < Number.MAX_SAFE_INTEGER && base2 < Number.MAX_SAFE_INTEGER && side1 < Number.MAX_SAFE_INTEGER && side2 < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", base1 + " + " + base2 + " + " + side1 + " + " + side2, perimeterFunctions.trapezePerimeter(base1, base2, side1, side2)));
                }

                else if(base1 > Number.MAX_SAFE_INTEGER || base2 > Number.MAX_SAFE_INTEGER || side1 > Number.MAX_SAFE_INTEGER || side2 > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 5) {
                    message.channel.send(errorFunctions.nOPE(4));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "diamond") {
                let side = Number(args[1]);

                if(!Number.isNaN(side) && args.length === 2 && side < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("P", side + " * 4", perimeterFunctions.diamondPerimeter(side)));
                }

                else if(side > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
        }

        else if(command === "a" || command === "area") {
            if(args[0] === "square") {
                let side = Number(args[1]);

                if(!Number.isNaN(side) && args.length === 2 && side < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", side + " * " + side, areaFunctions.squareArea(side)));
                }

                else if(side > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "rectangle") {
                let length = Number(args[1]);
                let width = Number(args[2]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && args.length === 3 && length < Number.MAX_SAFE_INTEGER && width < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", length + " * " + width, areaFunctions.rectangleArea(length, width)));
                }

                else if(length > Number.MAX_SAFE_INTEGER || width > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "disk") {
                let radius = Number(args[1]);

                if(!Number.isNaN(radius) && args.length === 2 && radius < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "(" + radius + " * " + radius + ") * \u03c0", areaFunctions.diskArea(radius)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "parallelogram" || args[0] === "para") {
                let base = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(base) && !Number.isNaN(height) && args.length === 3 && base < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", base + " * " + height, areaFunctions.parallelogramArea(base, height)));
                }

                else if(base > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "triangle") {
                let base = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(base) && !Number.isNaN(height) && args.length === 3 && base < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "(" + base + " * " + height + ") / 2", areaFunctions.triangleArea(base, height)));
                }

                else if(base > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "trapeze") {
                let base1 = Number(args[1]);
                let base2 = Number(args[2]);
                let height = Number(args[3]);

                if(!Number.isNaN(base1) && !Number.isNaN(base2) && !Number.isNaN(height) && args.length === 4 && base1 < Number.MAX_SAFE_INTEGER && base2 < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "((" + base1 + " + " + base2 + ") * " + height + ") / 2", areaFunctions.trapezeArea(base1, base2, height)));
                }

                else if(base1 > Number.MAX_SAFE_INTEGER || base2 > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "diamond") {
                let diagonal1 = Number(args[1]);
                let diagonal2 = Number(args[2]);

                if(!Number.isNaN(diagonal1) && !Number.isNaN(diagonal2) && args.length === 3 && diagonal1 < Number.MAX_SAFE_INTEGER && diagonal2 < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", diagonal1 + " * " + diagonal2 + " / 2", areaFunctions.diamondArea(diagonal1, diagonal2)));
                }

                else if(diagonal1 > Number.MAX_SAFE_INTEGER || diagonal2 > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "sphere") {
                let radius = Number(args[1]);

                if(!Number.isNaN(radius) && args.length === 2 && radius < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "(" + radius + " * " + radius + ") * (\u03c0 * 4)", areaFunctions.sphereArea(radius)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "cone") {
                let radius = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) && args.length === 3 && radius < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "racine carrée de ((" + radius + " * " + radius + ") + (" + height + " * " + height + ")) * \u03c0 * " + radius, areaFunctions.coneArea(radius, height)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "cube") {
                let arete = Number(args[1]);

                if(!Number.isNaN(arete) && args.length === 1 && arete < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", arete + " * " + arete + " * 6", areaFunctions.cubeArea(arete)));
                }

                else if(arete > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "r_c" || args[0] === "rectangleCuboid") {
                let length = Number(args[1]);
                let width = Number(args[2]);
                let height = Number(args[3]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && !Number.isNaN(height) && args.length === 3 && length < Number.MAX_SAFE_INTEGER && width < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "(" + length + " * " + width + ") + (" + width + " * " + height + ") + (" + length + " * " + width + ")", areaFunctions.rectangleCuboidArea(length, width, height)));
                }

                else if(length > Number.MAX_SAFE_INTEGER || width > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "cylinder") {
                let radius = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) && args.length === 3 && radius < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "\u03c0 * (" + radius + " * " + radius + ") * " + height, areaFunctions.cylinderArea(radius, height)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "pyramid_s") {
                let baseSide = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(baseSide) && !Number.isNaN(height) && args.length === 3 && baseSide < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("A", "(" + baseSide + " * 4 * racine carrée de ((" + height + " * " + height + ") + (" + baseSide + " / 2) * (" + baseSide + " / 2)) / 2", areaFunctions.squareBasedPyramidArea(baseSide, height)));
                }

                else if(baseSide > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
        }

        else if(command === "v" || command === "volume") {
            if(args[0] === "cube") {
                let arete = Number(args[1]);

                if(!Number.isNaN(arete) && args.length === 2 && arete < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", arete + " * " + arete + " * " + arete, volumeFunctions.cubeVolume(arete)));
                }

                else if(arete > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "r_c" || args[0] === "rectangleCuboid") {
                let length = Number(args[1]);
                let width = Number(args[2]);
                let height = Number(args[3]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && !Number.isNaN(height) && args.length === 4 && length < Number.MAX_SAFE_INTEGER && width < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", length + " * " + width + " * " + height, volumeFunctions.rectangleCuboidVolume(length, width, height)));
                }

                else if(length > Number.MAX_SAFE_INTEGER || width > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "cylinder") {
                let radius = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) &&  args.length === 3 && radius < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", "\u03c0 * (" + radius + " * " + radius + ") * " + height, volumeFunctions.cylinderVolume(radius, height)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "cone") {
                let radius = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(radius) && !Number.isNaN(height) &&  args.length === 3 && radius < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", "\u03c0 * (" + radius + " * " + radius + ") * " + height + " / 3", volumeFunctions.coneVolume(radius, height)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "pyramid_s") {
                let side = Number(args[1]);
                let height = Number(args[2]);

                if(!Number.isNaN(side) && !Number.isNaN(height) &&  args.length === 3 && side < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", "(" + side + " * " + side + ") * " + height + " / 3", volumeFunctions.squareBasedPyramidVolume(side, height)));
                }

                else if(side > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "pyramid_r") {
                let length = Number(args[1]);
                let width = Number(args[2]);
                let height = Number(args[3]);

                if(!Number.isNaN(length) && !Number.isNaN(width) && !Number.isNaN(height) &&  args.length === 4 && length < Number.MAX_SAFE_INTEGER && width < Number.MAX_SAFE_INTEGER && height < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", "(" + length + " * " + width + ") * " + height + " / 3", volumeFunctions.rectangleBasedPyramidVolume(side, height)));
                }

                else if(length > Number.MAX_SAFE_INTEGER || width > Number.MAX_SAFE_INTEGER || height > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "sphere") {
                let radius = Number(args[1]);

                if(!Number.isNaN(radius) && args.length === 2 && radius < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("V", "(4 / 3) * \u03c0 * (" + radius + " * " + radius + " * " + radius + ")", volumeFunctions.sphereVolume(radius)));
                }

                else if(radius > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 2) {
                    message.channel.send(errorFunctions.nOPE(1));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
        }

        else if(command === "t" || command === "theorem") {
            if(args[0] === "pythagoreOtherSide" || args[0] === "pOS") {
                let hypotenuse = Number(args[1]);
                let knownSide = Number(args[2]);

                if(!Number.isNaN(hypotenuse) && !Number.isNaN(knownSide) && args.length === 3 && hypotenuse < Number.MAX_SAFE_INTEGER && knownSide < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Théorème de Pythagore", "racine carrée de (" + hypotenuse + " * " + hypotenuse + ") - (" + knownSide + " * " + knownSide + ")", theoremFunctions.pythagoreOtherSide(hypotenuse, knownSide)));
                }

                else if(hypotenuse > Number.MAX_SAFE_INTEGER || knownSide > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
            
            else if(args[0] === "pythagoreHypotenuse" || args[0] === "pH") {
                let knownSide1 = Number(args[1]);
                let knownSide2 = Number(args[2]);

                if(!Number.isNaN(knownSide1) && !Number.isNaN(knownSide2) && args.length === 3 && knownSide1 < Number.MAX_SAFE_INTEGER && knownSide2 < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Théorème de Pythagore", "racine carrée de (" + knownSide1 + " * " + knownSide1 + ") + (" + knownSide2 + " * " + knownSide2 + ")", Math.round((Math.hypot(knownSide1, knownSide2) * 1000)) / 1000));
                }

                else if(knownSide1 > Number.MAX_SAFE_INTEGER || knownSide2 > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 3) {
                    message.channel.send(errorFunctions.nOPE(2));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
            
            else if(args[0] === "thalesWithUnknownNumerator" || args[0] === "tWUN") {
                let knownFractionNumerator = Number(args[1]);
                let knownFractionDenominator = Number(args[2]);
                let knownDenominator = Number(args[3]);

                if(!Number.isNaN(knownFractionNumerator) && !Number.isNaN(knownFractionDenominator) && !Number.isNaN(knownDenominator) && args.length === 4 && knownFractionNumerator < Number.MAX_SAFE_INTEGER && knownFractionDenominator < Number.MAX_SAFE_INTEGER && knownDenominator < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Théorème de Thalès", "(" + knownFractionNumerator + " * " + knownDenominator + ") / " + knownFractionDenominator, theoremFunctions.thalesWithUnknownNumerator(knownFractionNumerator, knownFractionDenominator, knownDenominator)));
                }

                else if(knownFractionNumerator > Number.MAX_SAFE_INTEGER || knownFractionDenominator > Number.MAX_SAFE_INTEGER || knownDenominator > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
            
            else if(args[0] === "thalesWithUnknownDenominator" || args[0] === "tWUD") {
                let knownFractionNumerator = Number(args[1]);
                let knownFractionDenominator = Number(args[2]);
                let knownNumerator = Number(args[3]);

                if(!Number.isNaN(knownFractionNumerator) && !Number.isNaN(knownFractionDenominator) && !Number.isNaN(knownNumerator) && args.length === 4 && knownFractionNumerator < Number.MAX_SAFE_INTEGER && knownFractionDenominator < Number.MAX_SAFE_INTEGER && knownNumerator < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Théorème de Thalès", "(" + knownFractionDenominator + " * " + knownNumerator + ") / " + knownFractionNumerator, theoremFunctions.thalesWithUnknownDenominator(knownFractionNumerator, knownFractionDenominator, knownNumerator)));
                }

                else if(knownFractionNumerator > Number.MAX_SAFE_INTEGER || knownFractionDenominator > Number.MAX_SAFE_INTEGER || knownNumerator > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }

            else if(args[0] === "inverseOfPythagoreTheorem" || args[0] === "iOPT") {
                let referenceSide = Number(args[1]);
                let otherSide1 = Number(args[2]);
                let otherSide2 = Number(args[3]);

                if(!Number.isNaN(referenceSide) && !Number.isNaN(otherSide1) && !Number.isNaN(otherSide2) && args.length === 4 && referenceSide < Number.MAX_SAFE_INTEGER && otherSide1 < Number.MAX_SAFE_INTEGER && otherSide2 < Number.MAX_SAFE_INTEGER) {
                    message.channel.send(result("Réciproque du théorème de Pythagore", referenceSide + "² = " + otherSide1 + "² + " + otherSide2 + "² ?", theoremFunctions.inverseOfPythagoreTheorem(referenceSide, otherSide1, otherSide2)));
                }

                else if(referenceSide > Number.MAX_SAFE_INTEGER || otherSide1 > Number.MAX_SAFE_INTEGER || otherSide2 > Number.MAX_SAFE_INTEGER) {
                    message.channel.send(errorFunctions.uTBNE());
                }

                else if(args.length !== 4) {
                    message.channel.send(errorFunctions.nOPE(3));
                }

                else message.channel.send(errorFunctions.tOPE("nombres"));
            }
        }

        else if(command === "help") {
            if(!args || args.length === 0) {
                message.channel.send(embeds.help);
            }

            else if(args[0] === "calc" || args[0] === "compute" || args[0] === "c") {
                message.channel.send(embeds.calcHelp);
            }

            else if(args[0] === "perimeter" || args[0] === "p") {
                message.channel.send(embeds.perimeterHelp);
            }

            else if(args[0] === "area" || args[0] === "a") {
                message.channel.send(embeds.areaHelp);
            }

            else if(args[0] === "volume" || args[0] === "v") {
                message.channel.send(embeds.volumeHelp);
            }

            else if(args[0] === "theorem" || args[0] === "t") {
                message.channel.send(embeds.theoremHelp);
            }
        }

        else if(command === "pl" || command === "perimeter_list") {
            if(!args || args.length === 0) {
                message.channel.send(embeds.pl);
            }
        }

        else if(command === "al" || command === "area_list") {
            if(!args || args.length === 0) {
                message.channel.send(embeds.al);
            }
        }

        else if(command === "vl" || command === "volume_list") {
            if(!args || args.length === 0) {
                message.channel.send(embeds.vl);
            }
        }

        else if(command === "tl" || command === "theorems_list") {
            if(!args || args.length === 0) {
                message.channel.send(embeds.tl);
            }
        }

        else if(command === "invite") {
            message.channel.send(embeds.invite);
        }

        else if(command === "formula" || command === "f") {
            const possibleArgs = ['p', 'a', 'v', 'perimeter', 'area', 'volume'];

            if(possibleArgs.includes(args[0])) {
                if(args[0] === "perimeter" || args[0] === "p") {
                    const perimeterFormulas = new discord.RichEmbed();
                    perimeterFormulas.setTitle("Formules de périmètre");
                    perimeterFormulas.setColor("FF99CC");
                    perimeterFormulas.addField("Carré :", "\`côté * 4\`", true);
                    perimeterFormulas.addField("Rectangle :", "\`Longueur * 2 + largeur * 2\`", true);
                    perimeterFormulas.addField("Cercle :", "\`2 * \u03c0 * Rayon\`");
                    perimeterFormulas.addField("Triangle :", "\`côté1 + côté2 + côté3\`", true);
                    perimeterFormulas.addField("Parallèlogramme :", "\`Longueur * 2 + largeur * 2\`", true);
                    perimeterFormulas.addField("Trapèze :", "\`base1 + base2 + côté1 + côté2\`");
                    perimeterFormulas.addField("Losange :", "\`côté * 4\`", true);
    
                    message.channel.send(perimeterFormulas);
                }
    
                else if(args[0] === "area" || args[0] === "a") {
                    const areaFormulas = new discord.RichEmbed();
                    areaFormulas.setTitle("Formules d'aire");
                    areaFormulas.setColor("FF99CC");
                    areaFormulas.addField("Carré :", "\`côté²\`", true);
                    areaFormulas.addField("Rectangle :", "\`Longueur * largeur\`", true);
                    areaFormulas.addField("Disque :", "\`\u03c0 * Rayon²\`");
                    areaFormulas.addField("Triangle :", "\`(base * hauteur) / 2\`", true);
                    areaFormulas.addField("Parallèlogramme :", "\`base * hauteur\`", true);
                    areaFormulas.addField("Trapèze :", "\`((base1 + base2) * hauteur) / 2\`");
                    areaFormulas.addField("Losange :", "\`diagonale1 * diagonale2 / 2\`", true);
                    areaFormulas.addField("Sphère :", "\`Rayon² * (\u03c0 * 4)\`", true);
                    areaFormulas.addField("Cône :", "\`√(Rayon² + hauteur²) * \u03c0 * Rayon\`", true);
                    areaFormulas.addField("Cube :", "\`arête² * 6\`", true);
                    areaFormulas.addField("Pavé droit :", "\`(2 * Longueur * largeur) + (2 * Longueur * hauteur) + (2 * largeur * hauteur)\`", true);
                    areaFormulas.addField("Cylindre :", "\`2 * \u03c0 * Rayon * hauteur\`");
                    areaFormulas.addField("Pyramide à base carrée :", "\`(côté de la base * 4) * √(hauteur² + (côté de la base / 2)²) / 2\`", true);
    
                    message.channel.send(areaFormulas);
                }
    
                else if(args[0] === "volume" || args[0] === "v") {
                    const volumeFormulas = new discord.RichEmbed();
                    volumeFormulas.setTitle("Formules de volume");
                    volumeFormulas.setColor("FF99CC");
                    volumeFormulas.addField("Cube :", "\`arête³\`", true);
                    volumeFormulas.addField("Pavé droit :", "\`Longueur * largeur * hauteur\`", true);
                    volumeFormulas.addField("Cylindre :", "\`\u03c0 * Rayon² * hauteur\`");
                    volumeFormulas.addField("Cône :", "\`(\u03c0 * Rayon² * hauteur) / 3\`", true);
                    volumeFormulas.addField("Pyramide à base carrée :", "\`(coté² * hauteur) / 3\`", true);
                    volumeFormulas.addField("Pyramide à base rectangulaire :", "\`((Longueur * largeur) * hauteur) / 3\`", true);
                    volumeFormulas.addField("Sphère :", "\`(4 / 3) * \u03c0 * Rayon³\`", true);
    
                    message.channel.send(volumeFormulas);
                }
            } else message.channel.send(new discord.RichEmbed().setTitle(`:x: Erreur: Argument invalide`).setColor("FF0000").setDescription("\`" + args[0] + "\` n'est pas une catégorie de formules valide."));
        }

        else if(command === "augmentation") {
            let number = Number(args[0]);
            let percentage = Number(args[1]);

            if(!Number.isNaN(number) && args.length === 2) {
                message.channel.send(result("Augmentation", "(" + percentage + " / 100) * " + number + " + " + number, calcFunctions.map(percentage, 0, 100, 0, number) + number));
            }
        }

        else if(command === "diminution") {
            let number = Number(args[0]);
            let percentage = Number(args[1]);

            if(!Number.isNaN(number) && args.length === 2) {
                message.channel.send(result("Diminution", `${number} - (${percentage} / 100) * ${number}`, number - calcFunctions.map(percentage, 0, 100, 0, number)));
            }
        }
    }
});
