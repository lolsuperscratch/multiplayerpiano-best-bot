////////////////////////////////
// MPPx Multiplayer Piano Bot //
////////////////////////////////

// setup
const Client = require('http://www.multiplayerpiano.com/Client.js');
const gClient = new Client('ws://www.multiplayerpiano.com:443');
gClient.setChannel('lobby');

gClient.start();

// adminisator name
var admin = "goodforfun"; // your participant name on multiplayerpiano.com (fork this to edit)
// WARN: Dont Edit your participant name on multiplayer piano! if you edit your name, the bot may have issue to run admin commands



// bot start
gClient.on('a',function (msg) {
      // change name to make better on this bot
      gClient.sendArray([{m: "userset", set: {name: "MPPx"}}])
     // orignal commands start (dont edit!)
     if (msg.a.toLowerCase() == "mppx test") {
         gClient.sendArray([{m: "a",message: "this bot is running on node.js, online"}])
     }
     if (msg.a.toLowerCase() == "mppx name") {
         gClient.sendArray([{m: "a",message: "your name is: " + msg.p.name]}])
     }
     if (msg.a.toLowerCase() == "mppx color") {
         gClient.sendArray([{m: "a",message: "your color is: " + msg.p.color]}])
     }
     if (msg.a.toLowerCase() == "mppx yomama") {
         gClient.sendArray([{m: "a",message: "Yo Mama so fat"]}])
     }
     if (msg.a.toLowerCase() == "mppx momgay") {
         gClient.sendArray([{m: "a",message: "Ur Mom Gay"]}])
     }
     // this what happens user needs help command
     if (msg.a.toLowerCase() == "mppx help") {
         gClient.sendArray([{m: "a",message: "| name, color, yomama, momgay, test"]}])
     }
    // orignal commands end
    // make your own commands! (use prefix mppx and spacebar to run better)
});
