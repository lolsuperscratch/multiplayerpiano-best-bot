

// setup
const Discord = require('discord.js');


const client = new Discord.Client();


// bot start

client.on('ready', function () {
  console.log('bot ready');
  
});




client.on('message', function (message) {
  if (!message.author.bot) {
     if (message.content == "aroundworld game") {
        message.channel.send("check your dms")
        message.author.send("https://aroundworld.bubbleapps.io")
     }
     if (message.content == "aroundworld help") {
        message.channel.send("check your dms")
        message.author.send("`dice` `ping` `game`")
     }
     if (message.content == "aroundworld ping") {
        message.channel.send("Pong! `" + client.ping + "`")
        
     }
     if (message.content == "aroundworld dice") {
        message.channel.send("user did roll a dice! `" + Math.floor(Math.random() * 8) + "`")
        
     }
     
  }
  if(message.content.indexOf("wtf") > -1) {
    message.react("😂")
  }
  if(message.content.indexOf("gay") > -1) {
    message.react("😂")
  }
});


// bot end
client.login(process.env.BOT_TOKEN);
