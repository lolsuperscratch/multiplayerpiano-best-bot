

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


// bot end
client.login(process.env.BOT_TOKEN);
