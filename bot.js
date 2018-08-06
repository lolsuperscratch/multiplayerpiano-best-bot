
// FrotoCool Discord Bot

// setup
const Discord = require('discord.js');


const client = new Discord.Client();

var guilddata = [];
// bot start

client.on('ready', function () {
  console.log('bot ready');
});


client.on('message', function (message) {
  console.log("new message for " + message.author.name + ": " + message.content)
  
  autoadd(message.guild.id);
  if (message.content == "froto help") {
      message.channel.send("`froto record` - Record message, `froto stop` - stop record, `froto play` - play that you recorded, `froto yell [message]` - yell the guilds")
  }
  if (message.content == "froto record") {
      clearArray(findguilddata(message.guild.id).messages)
      message.channel.send("Recording")
      
      findguilddata(message.guild.id).recording = true;
  }
  if (message.content == "froto stop") {
      message.channel.send("record stopped")
      findguilddata(message.guild.id).recording = false;
  }
  if (message.content.substring(0,10) == "froto yell") {
      message.channel.send('yelled the guilds')
      sendGuilds(message.author.name + " has been yelled: " + message.content.substring(11), message.guild)
  }
  findguilddata(message.guild.id).channel = message.channel.name;
  if (findguilddata(message.guild.id).recording) {
     findguilddata(message.guild.id).messages.push(message.author.name + ": " + message.content)
  }
  if (message.content == "froto play") {
      for (var message in findguilddata(message.guild.id).messages) {
      message.channel.send(message)
      }
      if (findguilddata(message.guild.id).messages.length == 0) {
         message.channel.send("Sorry there is no messages recorded!")
      }
  }

});
// automatic add guild data

function autoadd(id) {
   for (var data in guilddata) {
            if (guilddata.id != id) {
                guilddata.push({id: id, channel: "general", recording: false, cguild: null, messages: []})
            }
   }
}
// find the guild data by id
function findguilddata(id) {
   for (var data in guilddata) {
            if (guilddata.id == id) {
                return data
            }
   }
   return null
}
// send on guilds
function sendGuilds(message, author) {
   for (var guild in client.guilds) {
        autoadd(guild.id)
        if (author.id != guild.id) {
        guild.channels.find('name', 'general').send(message)
        }
   }
}

function clearArray(array) {
   while (array.length) {
       array.pop()
   }
}

// bot end
client.login(process.env.BOT_TOKEN);
