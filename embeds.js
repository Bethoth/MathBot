const {RichEmbed} = require("discord.js");

const help = new RichEmbed();
help.setTitle(`Aide`);
help.setColor("00FFFF");
help.setDescription(`Liste des commandes: 
\`calc\`
\`perimeter\`
\`area\`
\`volume\`
\`theorem\`
`);


const calcHelp = new RichEmbed();
calcHelp.setColor("00FFFF");
calcHelp.setTitle(`Aide de la commande \`calc\``);
calcHelp.setDescription(`**RAPPEL**: les [arguments] sont _obligatoires_ tandis que les <arguments> ne le sont pas.`);
calcHelp.addField("À quoi ça sert ?", "Cette commande sert à faire les calculs les plus basiques comme les additions, les soustractions, les multiplications, les divisions et les modulos.");
calcHelp.addField("Comment on s'en sert ?", `Cette commande s'utilise ainsi : \`$calc [nombre] [opérateur] [nombre]\``);
calcHelp.addField("Exemples:", `
\`$calc 7 + 7\` → addition → 14
\`$calc 7 - 5\` → soustraction → 2
\`$calc 7 * 5\` → multiplication → 35
\`$calc 10 / 5\` → division → 2
`);
calcHelp.addField("Alias:", "compute, c");


const perimeterHelp = new RichEmbed();
perimeterHelp.setTitle(`Aide de la commande \`perimeter\``);
perimeterHelp.setColor("00FFFF");
perimeterHelp.setDescription(`**RAPPEL**: les [arguments] sont _obligatoires_ tandis que les <arguments> ne le sont pas.`);
perimeterHelp.addField("À quoi ça sert ?", "Cette commande sert à calculer le périmètre de nombreuses figures (\`$pl\`)");
perimeterHelp.addField("Comment on s'en sert ? (soit n le nombre de mesures)", `
Cette commande s'utilise ainsi : \`$perimeter [figure] n[mesure]\`
`);
perimeterHelp.addField("Exemples:", `
\`$perimeter square 5\` → périmètre d'un carré → 20
\`$perimeter rectangle 8 6\` → périmètre d'un rectangle → 28
`);
perimeterHelp.addField("Alias:", "p");


const areaHelp = new RichEmbed();
areaHelp.setTitle(`Aide de la commande \`area\``);
areaHelp.setColor("00FFFF");
areaHelp.setDescription(`**RAPPEL**: les [arguments] sont _obligatoires_ tandis que les <arguments> ne le sont pas.`);
areaHelp.addField("À quoi ça sert ?", "Cette commande sert à calculer l'aire de nombreuses figures (\`$al\`)");
areaHelp.addField("Comment on s'en sert ? (soit n le nombre de mesures)", `Cette commande s'utilise ainsi : \`$area [figure] n[mesure]\``);
areaHelp.addField("Exemples:", `
\`$area square 5\` → aire d'un carré → 25
\`$area rectangle 8 6\` → aire d'un rectangle → 48
`);
areaHelp.addField("Alias:", "a");


const volumeHelp = new RichEmbed();
volumeHelp.setTitle(`Aide de la commande \`volume\``);
volumeHelp.setColor("00FFFF");
volumeHelp.setDescription(`**RAPPEL**: les [arguments] sont _obligatoires_ tandis que les <arguments> ne le sont pas.`);
volumeHelp.addField("À quoi ça sert ?", "Cette commande sert à calculer le volume de nombreuses figures (\`$vl\`)");
volumeHelp.addField("Comment on s'en sert ? (soit n le nombre de mesures)", `Cette commande s'utilise ainsi : \`$volume [figure] n[mesure]\``);
volumeHelp.addField("Exemples:", `
\`$volume cube 5\` → volume d'un carré → 125
\`$volume rectangleCuboid 8 6 5\` → volume d'un rectangle → 240
`);
volumeHelp.addField("Alias:", "v");


const theoremHelp = new RichEmbed();
theoremHelp.setTitle(`Aide de la commande \`theorem\``);
theoremHelp.setColor("00FFFF");
theoremHelp.setDescription(`**RAPPEL**: les [arguments] sont _obligatoires_ tandis que les <arguments> ne le sont pas.`);
theoremHelp.addField("À quoi ça sert ?", "Cette commande sert à effectuer quelques théorèmes (\`$theoremsList\`)");
theoremHelp.addField("Comment on s'en sert ? (soit n le nombre de mesures)", `Cette commande s'utilise ainsi : \`$theorem [théorème] n[mesure]\``);
theoremHelp.addField("Exemples:", `
\`$theorem pythagoreHypotenuse 5 5\` → calcul d'hypoténuse → 7 (environ)
\`$theorem pythagoreOtherSide 8 6\` → calcul d'un autre côté → 5 (environ)
`);
theoremHelp.addField("Alias:", "t");


const pl = new RichEmbed(); //perimeter list
pl.setTitle("Liste des figures dont le périmètre peut être calculé");
pl.setColor("D2691E");
pl.setDescription(`Les figures dont le périmètre peut être calculé sont : 
carré (\`square\`)
rectangle (\`rectangle\`)
cercle (\`circle\`)
triangle (\`triangle\`)
parallèlogramme (\`parallelogram\` | \`para\`)
trapèze (\`trapeze\`)
losange (\`diamond\`)
`);


const al = new RichEmbed(); //area list
al.setTitle("Liste des figures dont l'aire peut être calculée");
al.setColor("D2691E");
al.setDescription(`Les figures dont l'aire peut être calculée sont :
carré (\`square\`)
rectangle (\`rectangle\`)
disque (\`disk\`)
parallèlogramme (\`parallelogram\` | \`para\`)
triangle (\`triangle\`)
trapèze (\`trapeze\`)
losange (\`diamond\`)
sphère (\`sphere\`)
cône (\`cone\`)
cube (\`cube\`)
pavé droit (\`r_c\` | \`rectangleCuboid\`)
cylindre (\`cylinder\`)
pyramide à base carrée (\`pyramid_s\`)
`);


const vl = new RichEmbed(); //volume list
vl.setTitle("Liste des figures dont le volume peut être calculé");
vl.setColor("D2691E");
vl.setDescription(`Les figures dont le volume peut être calculé sont :
cube (\`cube\`)
pavé droit (\`r_c\` | \`rectangleCuboid\`)
cylindre (\`cylinder\`)
cône (\`cone\`)
pyramide à base carrée (\`pyramid_s\`)
pyramide à base rectangle (\`pyramid_r\`)
sphère (\`sphere\`)
`);


const tl = new RichEmbed(); //theorems list
tl.setTitle("Liste des théorèmes applicables");
tl.setColor("D2691E");
tl.setDescription(`Les théorèmes applicables sont :
le théorème de Pythagore (calcul d'hypoténuse (\`pythagoreHypotenuse\` | \`pH\`) et calcul d'un autre côté (\`pythagoreOtherSide\` | \`pOS\`))

le théorème de Thalès (calcul lorsque l'on connaît une fraction et un numérateur (\`thalesWithUnknownDenominator\` | \`tWUD\`) **ou** un dénominateur (\`thalesWithUnknownNumerator\` | \`tWUN\`))

la réciproque du théorème de Pythagore (renvoie vrai si les 2 côtés au carré additionnés sont égaux au carré de l'autre côté (\`inverseOfPythagoreTheorem\` | \`iOPT\`))
`);


const invite = new RichEmbed();
invite.setTitle("Invitation, serveur de test et GitHub du bot");
invite.setColor("FF7F50");
invite.setDescription(`Voilà quelques liens utiles à mon sujet :`);
invite.addField(`:link: Invitation du bot :`, "[MathBot](https://discordapp.com/oauth2/authorize?client_id=557252483705995279&scope=bot&permissions=2146958847)", true);
invite.addField(`:link: Serveur de test :`, "[My Bots Test](https://discord.gg/zBFhx73)", true);
invite.addField(`:link: GitHub :`, "[GitHub](https://github.com/ThePizzaDu62/MathBot)", true);


module.exports = {
    help : help,
    calcHelp : calcHelp,
    perimeterHelp : perimeterHelp,
    areaHelp : areaHelp,
    volumeHelp : volumeHelp,
    theoremHelp : theoremHelp,
    pl : pl, //perimeter list
    al : al, //area list
    vl : vl, //volume list
    tl : tl, //theorem list
    invite : invite
}
