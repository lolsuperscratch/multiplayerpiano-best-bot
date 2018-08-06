
// FrotoCool Discord Bot

// setup
const Discord = require('discord.js');


const client = new Discord.Client();

var guilddata = [];
var jokes = ["Ayy that is a good food", "i cook the food and awesome", "cool thing that you do"];
// bot start

client.on('ready', function () {
  console.log('bot ready');
  for (var guild in client.guilds) {
        
        if (author.id != guild.id) {
        guild.channels.find('name', 'general').send("bot is started now")
        }
   }
});


client.on('message', function (message) {
  console.log("new message " + message.content)
  
  if (message.author.bot == false) {
  if (message.content == "froto help") {
      message.channel.send("`froto random` - random 1 to 100, `froto joke` - random joke, `froto boing` - bot sends boing")
  }
  if (message.content == "froto random") {
      message.channel.send(Math.floor(Math.random() * 100) + 1)
  }
  if (message.content == "froto joke") {
      message.channel.send(jokes[Math.floor(Math.random() * jokes.length)])
      
  }
  
  
  
  if (message.content == "froto boing") {
      message.channel.send("Boing!")
  }
}
});
// automatic add guild data

function autoadd(id) {
   if (findguilddata(id) == null) {
      guilddata.push({id: id, recording: false, messages: [], });
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
function sendGuilds(message) {
   for (var guild in client.guilds) {
        
        
        guild.channels.find('name', 'general').send(message)
        
   }
}

function clearArray(array) {
   while (array.length) {
       array.pop()
   }
}



// bot end
client.login(process.env.BOT_TOKEN);
