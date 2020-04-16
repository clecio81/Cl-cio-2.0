const { RichEmbed } = require("discord.js");


  module.exports = {
    config: {
      name: 'ping',
      aliases: ['latency', 'ms'],
      usage: '-ping',
      description: 'Displays the bot\'s latency',
      category: 'Miscellaneous',
      accessableby: 'Users'
    },
    
  run: async (client, message, args) => {
    message.channel.send(`${client.emojis.get('641823449043566617')} carregando, por favor aguarde..`).then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp
      let embed = new RichEmbed()
        .setColor([54, 57, 63])
        .setThumbnail(client.user.displayAvatarURL)
        .addField('[**__latência:__**]', `\`🛰️ ${ping}MS\``, true)
        .addField('[**__API tempo de resposta:__**]', `\`🔗 ${Math.round(client.ping)}MS\``, true)
        .addField('[**__Cliente ID__**]', `\`🆔 ${client.user.id}\``)
      m.delete()
      message.channel.send(embed)
      })
    }
  }


