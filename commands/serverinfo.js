const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


	var botEmbed = new discord.MessageEmbed()
		.setDescription("server info")
		.setColor("#FF1493")
		.setThumbnail("https://cdn.discordapp.com/avatars/717417310318624849/f6b989ea36165d2b3d6050032acd1eb7.png?size=128")
		.addField("made on", bot.user.createdAt)
		.addFields(
			{ name: "bot name", value: bot.user.username },
			{ name: "server joined at:", value: message.member.joinedAt },
			{ name: "Total members", value: message.guild.memberCount }
		)
		.setFooter("\u00A9 [BFTF] BelgiumRoleplay", "https://cdn.discordapp.com/avatars/717417310318624849/f6b989ea36165d2b3d6050032acd1eb7.png?size=128");

	return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"

}