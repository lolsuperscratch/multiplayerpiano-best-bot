
// FrotoCool Discord Bot

// setup
const Discord = require('discord.js');


const client = new Discord.Client();


// bot start

client.on('ready', function () {
  console.log('bot ready');
  
});


bot.on('guildMemberAdd', function (member) {
    member.guild.channels.get('aroundworld-chat').send("Welcome " + member.user + ", you read the rules?"); 
});


// bot end
client.login(process.env.BOT_TOKEN);
