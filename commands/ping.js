module.exports.run = async (client, message, args) => {

    return message.channel.send(`**Trispcs - BOT Status/Ping**\n\nPong: ` + (message.createdTimestamp - Date.now()) + ` ms\n\n🟢 - Goed | 🟠 - Stabiel | 🔴 - Laag\n\n**BOT Snelheid:** 🟢\n**Database:** 🔴\n**Ddoss Protectie:** 🟢\n**Algemene Ping:** 🟠`);

}

module.exports.help = {
    name: "ping",
    aliases: "status",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}