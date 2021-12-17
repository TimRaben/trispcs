const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) return message.reply(":x: **-** Geef een geldig bericht op!");

    var embed = new discord.MessageEmbed()
        .setAuthor("Trispcs", "https://images-ext-1.discordapp.net/external/BlCZSCmBCm-xI_ds2mFW0m-EayYo893OwazTTjtxdBs/%3Fsize%3D128/https/cdn.discordapp.com/avatars/722456265661612123/34b5c0bacbcc4a31a3f7192dad45cad1.png?width=107&height=107")
        .setDescription(`${args.slice(0).join(" ")}`)
        .setThumbnail("https://images-ext-1.discordapp.net/external/BlCZSCmBCm-xI_ds2mFW0m-EayYo893OwazTTjtxdBs/%3Fsize%3D128/https/cdn.discordapp.com/avatars/722456265661612123/34b5c0bacbcc4a31a3f7192dad45cad1.png?width=107&height=107")
        .setFooter("Trispcs Community | Alle Rechten Voorbehoud")
        .setTimestamp()
        .setColor("BLUE");

    message.channel.send(embed);
    }

module.exports.help = {
    name: "say"
}