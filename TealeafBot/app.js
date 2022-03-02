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
// client.user.setActivity("!legendlore | help", {type: "WATCHING"});
}); 

// Reconnect
client.on(strings[2], () => {
console.log(`This bot is trying to reconnect: ${client.user.tag}!`);
});

// Say hello
client.on('messageCreate', msg => {
var msgContent = msg.content.toLowerCase(); // Failsafe
if (msgContent == "mollybot"){
msg.reply("Here I am!");
}

else if (msgContent == "schatz?"){
    msg.channel.send("Yes, Darling?");
}
});





client.login(token);