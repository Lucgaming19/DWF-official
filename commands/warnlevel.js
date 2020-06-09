const discord = require("discord.js")
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("This command is management only");

	if (!args[0]) return message.reply("no username found!");

	if (!args[1]) return message.reply("no reason found!");

	if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("No perms");

	var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));

	var reason = args.slice(1).join(" ");

	if (!warnUser) return message.reply("User not found!");

	if (warnUser.hasPermission("KICK_MEMBERS")) return message.reply("sorry you can't warn him. he is a higher or equal to you.");
    var warnlevel = warns[warnUser.id].warns;

    message.reply(`${warnUser} has ${warnlevel} warnings.`);


}

module.exports.help = {
    name: "warns"

}