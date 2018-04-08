/*jshint esversion:6, camelcase: true*/
const config = require('./bot-config.json');
const log = require('./src/functions/log.js');

//Initialize vars ----------------------------------------
var slimeReplies = [
  "*reacts in excitement to the conversation*", 
  "*notices the conversation and hides the gun inside the slimy goo*",
  "*scratches itself*",
  "*whispers:* psst... don't tell Rob I'm here!"
];

//Discord Section -----------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  initializeEmojis();
  client.user.setActivity('Slime Rancher Rancher');
  log('I am ready!');
});

client.on('message', (message) => {
  if (message.author.bot) {return;}

  if (message.content.toString().toLowerCase().includes('slime')) {
    if (message.author.id == 230724684746850309){ //run away from Robin
      message.channel.send('*runs away*');
    } else {
      if (Math.floor(Math.random() * 2) % 2 == 0){ // Make it so the bot won't always trigger a response
        let i = Math.floor(Math.random()*slimeReplies.length);
        let slimeReply = slimeReplies[i];
        message.channel.send(slimeReply);
      }
    }
  }
  
});

client.login(config.token);
