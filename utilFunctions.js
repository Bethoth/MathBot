const {RichEmbed} = require("discord.js");

function result(calculation, explanation, result, unit = "") {
    let embed = new RichEmbed();
    embed.setTitle(`Résultat:`);
    embed.setColor("10DA5A");
    if(result < Number.MAX_SAFE_INTEGER) {
        embed.setDescription(calculation + " = " + explanation + " = " + result + unit);
    }

    else if(result >= Number.MAX_SAFE_INTEGER) {
        let embed = new RichEmbed();
        embed.setTitle(`Erreur: Résultat trop grand`);
        embed.setColor("FF0000");
        embed.setDescription(`:x: Le résultat de votre calcul est trop élevé pour être affiché correctement.`);
        return embed;
    }
    return embed;
}

module.exports = {
    result : result
}