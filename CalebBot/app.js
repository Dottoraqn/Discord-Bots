const {Client, Intents, ClientUser} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const strings = ["./token.json", "ready", "reconnecting"];
// Add a safer way to store the token (password)
const {
token
} = require(strings[0]);
// Display a message when the bot comes online. Here, arr[1] i.e. "ready" is an event.
client.on(strings[1], () => {
console.log(`Logged in as ${client.user.tag}!`); //` ` is a template string.
client.user.setActivity("!legendlore | help", {type: "WATCHING"});
}); 

// Reconnect
client.on(strings[2], () => {
console.log(`This bot is trying to reconnect: ${client.user.tag}!`);
});

// Say hello
client.on('messageCreate', msg => {
var msgContent = msg.content.toLowerCase(); // Failsafe
if (msgContent == "hallo, herr widogast!"){
msg.reply("Hallo, Guten Tag!");
}

// roll a d20
else if (msgContent == "rolies"){
var roll = Math.trunc(Math.random() * 20) + 1;
msg.channel.send("I rolled a " + roll);
}

else if(msgContent == "widoleaf"){
  msg.channel.send("schatz?");
}

//help command
else if(msgContent == "!legendlore"){
msg.reply('Frann Ezra has given me two commands in addition to this one. Saying "Hallo, Herr Widogast!" to me will garner a reply back. Asking for "rolies" will have me role a d20.');
}
});






client.login(token);