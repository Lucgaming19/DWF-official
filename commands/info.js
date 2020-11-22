const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


	var botEmbed = new discord.MessageEmbed()
		.setDescription("discord bot info")
		.setColor("#FF1493")
		.addField("Bot name", bot.user.username)
		.setThumbnail("https://cdn.discordapp.com/avatars/717417310318624849/f6b989ea36165d2b3d6050032acd1eb7.png?size=128")
		.addField("made on", bot.user.createdAt)
		.addFields(
			{ name: "prefix: .", value: "prefix: ." },
			{ name: "excisting commands:", value: "Bestaande commands:" },
			{ name: "server information", value: "serverinfo" },
			{ name: "information", value: "info" },
			{name: "help", Value: "help"})
		.setFooter("\u00A9 [BFTF] BelgiumRoleplay", "https://cdn.discordapp.com/avatars/717417310318624849/f6b989ea36165d2b3d6050032acd1eb7.png?size=128")
		.setTimestamp();

	return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"

}