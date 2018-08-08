const Discord = require("discord.js");
const Bot= new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on('message',message=>{
  if (message.content==='да'){
    message.reply('нет');
}
});


