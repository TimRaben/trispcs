const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const embed = new discord.MessageEmbed()
        .setTitle("Trispcs - Serverinformatie")
        .setAuthor("Trispcs Community", "https://images-ext-1.discordapp.net/external/BlCZSCmBCm-xI_ds2mFW0m-EayYo893OwazTTjtxdBs/%3Fsize%3D128/https/cdn.discordapp.com/avatars/722456265661612123/34b5c0bacbcc4a31a3f7192dad45cad1.png?width=107&height=107")
        .setThumbnail("https://images-ext-1.discordapp.net/external/BlCZSCmBCm-xI_ds2mFW0m-EayYo893OwazTTjtxdBs/%3Fsize%3D128/https/cdn.discordapp.com/avatars/722456265661612123/34b5c0bacbcc4a31a3f7192dad45cad1.png?width=107&height=107")
        .setColor("BLUE")
        .addField(`Server`, [
            '**➠ Servernaam:** Trispcs Community',
            `**➠ Eigenaar:** Tris`,
            `**➠ Boost Level:** ${message.guild.premiumTier}`,
            `**➠ Gemaakt op:** 22-12-2020`,
            `**➠ Aantal Leden:** ${message.guild.memberCount}`,
        ])
        .setTimestamp()
        .setFooter('Trispcs Community | Server Informaties');

    message.channel.send(embed);

    }

module.exports.help = {
    name: "serverinfo"
}