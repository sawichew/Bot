
const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === "да"){
    message.reply("нет");
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
