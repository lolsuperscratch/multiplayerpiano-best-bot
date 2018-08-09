

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
        message.author.send("`dice` `ping` `game` `kiss`")
     }
     if (message.content == "aroundworld ping") {
        message.channel.send("Pong! `" + client.ping + "`")
        
     }
     if (message.content == "aroundworld dice") {
        message.channel.send(message.user.username + " did roll a dice! `" + Math.floor(Math.random() * 8) + "`")
        
     }
     if (message.content == "aroundworld kiss") {
        message.channel.send("I kiss " + message.user.username)
        
     }
  }
});


// bot end
client.login(process.env.BOT_TOKEN);
