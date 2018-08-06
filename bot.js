
// FrotoCool Discord Bot

// setup
const Discord = require('discord.js');
const mpp = require('mpp-client-xt');

const client = new Discord.Client();

var guilddata = [];
// bot start

client.on('ready', function () {
  console.log('bot ready');
});


client.on('message', function (message) {
  autoadd(message.guild.id);
  if (message.content == "froto help") {
      message.channel.send("`froto call` - call on mpp client, `froto hang` - hang up on mpp client, `froto channel` - sets to the targeted channel")
  }
  if (message.content == "froto call") {
      message.channel.send("started call")
      mpp.chat.send("FrotoBot there is someone new on " + message.guild.name + ", say hello")
      findguilddata(message.guild.id).calling = true;
  }
  if (message.content == "froto hang") {
      message.channel.send("hanged up")
      mpp.chat.send("FrotoBot Call has hanged up in " + message.guild.name)
      findguilddata(message.guild.id).calling = false;
  }
  if (message.content == "froto channel") {
      if (message.member == message.guild.owner) {
      message.channel.send("target was setted to this channel")
      findguilddata(message.guild.id).channel = message.channel.name;
      } else {
        message.channel.send("you are not owner!")
      }
  }
  if (message.channel.name == findguilddata(message.guild.id).channel) {
     if (findguilddata(message.guild.id).calling) {
         mpp.chat.send("FrotoBot (calling on " + message.guild.name + ") " + message.author.name + ": " + message.content)
     }
  }
});
// automatic add guild data

function autoadd(id) {
   for (var data in guilddata) {
            if (guilddata.id != id) {
                guilddata.push({id: id, channel: "general", calling: false})
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
function sendGuilds(message) {
   for (var guild in client.guilds) {
        autoadd(guild.id)
        if (findguilddata(guild.id).calling) {
        guild.channels.find('name', findguilddata(guild.id).channel).send(message)
        }
   }
}

// listen to mpp chat
mpp.on('a', function (msg) {
   if (mpp.client.user._id != msg.p._id) {
       // send on discord if user sended by mpp client
       sendGuilds("(MPP) " + msg.p.name + ": " + msg.a)
   }
}) 
// bot end
client.login(process.env.BOT_TOKEN);
