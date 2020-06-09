const discord = require("discord.js")
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_Messages")) return message.reply("You can't do that IDIOTA!");
    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
    if (!warnUser) return message.reply("User not found!");
    var warnlevel = warns[warnUser.id].warns;

    message.reply(`<@${warnUser.id}> has ${warnlevel} warnings.`);


}

module.exports.help = {
    name: "warns"

}