const Discord = require("discord.js");
const Bot= new Discord.Client();
Bot.on('message',(message)=>{
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

clent.login(process.env.NDc2NDMxODkyNjY1NTk3OTgz.DktxgA.7A5H26W2OcS-HAFDc90U2Q9IPmc);
