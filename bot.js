

// setup
const Discord = require('discord.js');


const client = new Discord.Client();


// bot start

client.on('ready', function () {
  console.log('bot ready');
  
});


client.on('guildMemberAdd', function (member) {
    if (!member.bot) {
    member.guild.channels.get('aroundworld-chat').send("Welcome " + member.user + ", you read the rules?"); 
    }
});

client.on("guildCreate", guild => {
  var found = false;
  guild.channels.forEach(function(channel, id) {
      // If a channel is already found, nothing more needs to be done
      if(found == true || channel.type != "text") {
        return;
      }
      // If the channel isn't found and the bot has permission to 
      // send and read messages in the channel, send a welcome message there
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true;
        return channel.send("i welcome to users, Yayayaya")
      }
  })
});


// bot end
client.login(process.env.BOT_TOKEN);
