module.exports = {
  name: "twitter",
  description: "Gives you a link to the official Hypixel Translators Community Twitter page",
  usage: "+twitter",
  cooldown: 120,
  allowDM: true,
  channelWhitelist: ["549894938712866816", "624881429834366986", "730042612647723058", "749391414600925335", "551693960913879071"], // bots staff-bots bot-development bot-translators admin-bots
  execute(message, strings) {
    //message.delete()
    message.channel.send(strings.twitter.replace("%%twitter%%", "<https://twitter.com/HTranslators>"))
  }
}
