module.exports = {
  name: "invite",
  description: "Sends the invite link for the bot.",
  async execute (client, message, args) { // eslint-disable-line no-unused-vars
    return message.channel.send("Here is my invite link: https://discordapp.com/oauth2/authorize?client_id=644977600057573389&scope=bot&permissions=289800");
  }
};