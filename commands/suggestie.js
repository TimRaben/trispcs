const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!args[0]) return message.reply(":x: **-** Geef een suggestie op!");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var Suggestie = args.join(" ");

    var embed = new discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setTitle("Triscps Community - Suggestie")
            .setDescription(`Nieuwe Suggestie!\n\n**Suggestie:** ${Suggestie}\n**Ingezonden door:** ${message.author}\n\nLaat jou suggestie weten met *!suggestie (suggestie)*`)
            .setColor("BLUE")
            .setFooter(`${message.member.displayName} • Trispcs Community`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

            var channel = message.member.guild.channels.cache.get("857600977725292564");
    
        channel.send(embed).then(async (msg) => {
            await msg.react('✅');
            await msg.react('❌');
            message.delete();
        }).catch(err => {
            console.log(err);
        });
    
}


module.exports.help = {
    name: "suggestie"
}