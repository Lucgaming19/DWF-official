const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Limburg official bot** \n\n **__Commands__**" + 
            "\n.new {reden} - maakt een ticket aan." + 
            "\n\n ** __informatie commands__ **" +
            "\n.help - laat alle commando's zien." +
            "\n.info - Geeft info. " +
            "\n.serverinfo - Geeft serverinfo." +
            "** __Admin commands__ **" +
            "\n.ban - laat iemand verbannen." +
            "\n.kick - Laat iemand kicken." +
            "\n.clear - verwijderd berichten" +
            "\n.warn - laat iemand warnen. Werkt nog niet\n\n" +
            "\n\n\n \u00A9 [BFTF] BelgiumRoleplay ";

        message.author.send(text);

        message.reply("You got a dm from me in you're dm.");

    } catch (error) {
        message.reply("There is an error oquered");
    }
	
}

module.exports.help = {
	name: "help"
}