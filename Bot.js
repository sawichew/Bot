const Discord = require("discord.js");
const Bot= new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on('message',(message)=>{
if (message.content=="да"){
    message.reply("нет");
}
if (message.content=="нет"){
    message.reply("да");
}
if(message.content == "sh!repeat"){
      setInterval(function() {
          let answers = ["иринагей", "ирина тупая", "ирина сосет", "ирина фрик"]; 
          let rand = Math.floor(Math.random()*answers.length); 
        message.channel.send(answers[rand]);
      setTimeout(function() {
        clearInterval(any);
      }, 50000);
    }, 10000) 
         }
});


