const {RichEmbed} = require('discord.js');

function numberOfParamError(expectedNumber) {
    let embed = new RichEmbed();
    embed.setTitle(`Erreur: nombre de paramètres`);
    embed.setDescription(`:x: Cette commande nécessite ` + expectedNumber + ` paramètres.`);
    embed.setColor(`FF0000`);
    return embed;
}

function typeOfParamError(expectedType) {
    let embed = new RichEmbed();
    embed.setTitle(`Erreur: types des paramètres`);
    embed.setColor("FF0000");
    embed.setDescription(`:x: Veuillez n'utiliser que des ` + expectedType);
    return embed;
}

function useTooBigNumbersError() {
    let embed = new RichEmbed();
    embed.setTitle(`Erreur: Utilisation de nombres trop grands`);
    embed.setColor("FF0000");
    embed.setDescription(`:x: Vous utilisez un nombre trop grand, la limite est de ` + Number.MAX_SAFE_INTEGER);
    return embed;
}

function byZeroDivisionError() {
    let embed = new RichEmbed();
    embed.setTitle(`Erreur: Division par 0`);
    embed.setColor("FF0000");
    embed.setDescription(`:x: Vous ne pouvez pas effectuer de division par 0.`);
    return embed;
}

module.exports = {
    nOPE : numberOfParamError,
    tOPE : typeOfParamError,
    uTBNE : useTooBigNumbersError,
    bZDE : byZeroDivisionError
}