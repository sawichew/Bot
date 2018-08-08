
const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === "да"){
    message.reply("нет");
}
    if (message.content=="нет"){

    message.reply("да")
}
}
if (message.content=="я не тупая"){

    message.reply("ирина тупая")
}
}
if (message.content=="тупая"){

    message.reply("ирина тупая")
}
}
if (message.content=="соснули"){

    message.reply("ирина тупая")
}
    if(message.content == "в бой"){
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
