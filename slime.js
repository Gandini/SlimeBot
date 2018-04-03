/*jshint esversion:6, camelcase: true*/
const config = require('./bot-config.json');
const log = require('./src/functions/log.js');

//Initialize vars ----------------------------------------
var slimeReplies = [
  "*reacts in excitement to the conversation*", 
  "*notices the conversation and hides the gun inside inside the slimy goo*",
  "*scratches itself*",
  "*whispers:* psst... don't tell Rob I'm here!"
]

//var dittoblock = null;
var initializeEmojis = function() {
  //dittoblock = client.emojis.find("name", "dittoblock");
};

//Discord Section -----------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  initializeEmojis();
  client.user.setActivity('Slime Rancher');
  log('I am ready!');
});

client.on('message', (message) => {
  if (message.author.bot) {return;}

  const msg = message.content.split(" ");
  const cmd = msg[0];

  if (message.content.toString().toLowerCase().includes('slime')) {
    if (message.author.id == 230724684746850309){ //run away from Robin
      message.channel.send('*runs away*');
    } else {
      //make it so the bot doesn't always react to the message
      let i = Math.floor(Math.random()*slimeReplies.length) + Math.floor(Math.random()*slimeReplies.length);
      if (i <= slimeReplies.length){
        let slimeReply = slimeReplies[i];
        console.log(i);
        message.channel.send(slimeReply);
      }
    }
  }
  
});

client.login(config.token);
