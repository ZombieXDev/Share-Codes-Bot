const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require('discord.js')
const client = new Discord.Client()


client.on("ready", () => {
console.log("The Bot is Ready")
});

const prefix = process.env.prefix


const sett = require('./setting.json')
const disbut = require('discord-buttons');
disbut(client);
client.on("message", async message =>{
if(message.content.startsWith(prefix + "share")){
if(message.channel.id !== sett.channel) return message.channel.send(
  new Discord.MessageEmbed()
 .setAuthor("❌ Error", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`This is a not send codes channel`)
  
  )
const args = message.content.split(" ")
if(!args[1]) return message.channel.send(
  new Discord.MessageEmbed()
 .setAuthor("❌ Error", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Please tell me what the code lang may be it's  djs/dpy/eris/bdfd/html`)
  
  )
if(!args[2]) return message.channel.send(
  new Discord.MessageEmbed()
 .setAuthor("❌ Error", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Please tell me who the code owner`)
  )
const des = args.slice(3).join(" "); 
if(!des) return message.channel.send(
  new Discord.MessageEmbed()
 .setAuthor("❌ Error", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Please tell me what is the code do, the code discription`)
  
  ) 
if (args[1] === "djs"){
  const embed =  new Discord.MessageEmbed()
 .setColor("#F80000")
 .setDescription(`Now Typing Your Code`)
message.channel.send(embed)
      .then(() => {
        
  var filter = m => m.author.id == message.author.id;
  message.channel.awaitMessages(filter ,{
    max: 1,
    time: 30000,
    errors: ['time'],
  }) 
      .then((collected) =>{
        const Hastebin = require("hastebin-save");
Hastebin.upload(collected.first().content, link => {
    const djs = client.channels.cache.get(sett.djs)
    const line = sett.line
    const embed = new Discord.MessageEmbed()
   .setAuthor("Djs Codes", "https://i.imgur.com/wSTFkRM.png")
   .setColor("#F80000")
   .setDescription("```js\n" +collected.first().content + "\n```")
    .addFields(
                        {
                          name: "Shard By:",
                          value: `${message.author.tag}`,
                          inline: true
                        },
                        {
                          name: "Copyrights:",
                          value: `**\`${args[2]}\`**`,
                          inline: true
                        },
                        {
                          name: "Description:",
                          value: `**\`${des}\`**`,
                          inline: true
                        } 
                      ) 
   .setTimestamp() 
   let button = new disbut. MessageButton()
  .setStyle('url')
  .setURL("https://hastebin.com/" + link)
  .setLabel('Download Code'); 
 
    djs.send({
      button:button, 
      embed:embed
    })

    djs.send({files:[line]})
    message.channel.send(new Discord.MessageEmbed()
 .setAuthor("✅ Done", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Your Code Has Been Sended`)
  )
})
    })
   
    .catch(() => {
      message.channel.send('**Error : Try Again**');
    });
}) 
} 

//Discord.py 
if (args[1] === "dpy"){
  const embed =  new Discord.MessageEmbed()
 .setColor("#F80000")
 .setDescription(`Now Typing Your Code`)
message.channel.send(embed)
      .then(() => {
        
  var filter = m => m.author.id == message.author.id;
  message.channel.awaitMessages(filter ,{
    max: 1,
    time: 30000,
    errors: ['time'],
  }) 
      .then((collected) =>{
        const Hastebin = require("hastebin-save");
Hastebin.upload(collected.first().content, link => {
    const dpy = client.channels.cache.get(sett.dpy)
    const line = sett.line
    const embed = new Discord.MessageEmbed()
   .setAuthor("Dp6 Codes")
   .setColor("#F80000")
   .setDescription("```py\n" +collected.first().content + "\n```")
    .addFields(
                        {
                          name: "Shard By:",
                          value: `${message.author.tag}`,
                          inline: true
                        },
                        {
                          name: "Copyrights:",
                          value: `**\`${args[2]}\`**`,
                          inline: true
                        },
                        {
                          name: "Description:",
                          value: `**\`${des}\`**`,
                          inline: true
                        } 
                      ) 
   .setTimestamp() 
   let button = new disbut. MessageButton()
  .setStyle('url')
  .setURL("https://hastebin.com/" + link)
  .setLabel('Download Code'); 
 
    dpy.send({
      button:button, 
      embed:embed
    })

    dpy.send({files:[line]})
    message.channel.send(new Discord.MessageEmbed()
 .setAuthor("✅ Done", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Your Code Has Been Sended`)
  )
})
    })
   
    .catch(() => {
      message.channel.send('**Error : Try Again**');
    });
}) 
} 
///eris
if (args[1] === "eris"){
  const embed =  new Discord.MessageEmbed()
 .setColor("#F80000")
 .setDescription(`Now Typing Your Code`)
message.channel.send(embed)
      .then(() => {
        
  var filter = m => m.author.id == message.author.id;
  message.channel.awaitMessages(filter ,{
    max: 1,
    time: 30000,
    errors: ['time'],
  }) 
      .then((collected) =>{
        const Hastebin = require("hastebin-save");
Hastebin.upload(collected.first().content, link => {
    const eris = client.channels.cache.get(sett.eris)
    const line = sett.line
    const embed = new Discord.MessageEmbed()
   .setAuthor("Erisjs Codes")
   .setColor("#F80000")
   .setDescription("```js\n" +collected.first().content + "\n```")
    .addFields(
                        {
                          name: "Shard By:",
                          value: `${message.author.tag}`,
                          inline: true
                        },
                        {
                          name: "Copyrights:",
                          value: `**\`${args[2]}\`**`,
                          inline: true
                        },
                        {
                          name: "Description:",
                          value: `**\`${des}\`**`,
                          inline: true
                        } 
                      ) 
   .setTimestamp() 
   let button = new disbut. MessageButton()
  .setStyle('url')
  .setURL("https://hastebin.com/" + link)
  .setLabel('Download Code'); 
 
    eris.send({
      button:button, 
      embed:embed
    })

    eris.send({files:[line]})
    message.channel.send(new Discord.MessageEmbed()
 .setAuthor("✅ Done", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Your Code Has Been Sended`)
  )
})
    })
   
    .catch(() => {
      message.channel.send('**Error : Try Again**');
    });
}) 
} 
//bdfd 
if (args[1] === "bdfd"){
  const embed =  new Discord.MessageEmbed()
 .setColor("#F80000")
 .setDescription(`Now Typing Your Code`)
message.channel.send(embed)
      .then(() => {
        
  var filter = m => m.author.id == message.author.id;
  message.channel.awaitMessages(filter ,{
    max: 1,
    time: 30000,
    errors: ['time'],
  }) 
      .then((collected) =>{
        const Hastebin = require("hastebin-save");
Hastebin.upload(collected.first().content, link => {
    const bdfd = client.channels.cache.get(sett.bdfd)
    const line = sett.line
    const embed = new Discord.MessageEmbed()
   .setAuthor("Bdfd Codes")
   .setColor("#F80000")
   .setDescription("```js\n" +collected.first().content + "\n```")
    .addFields(
                        {
                          name: "Shard By:",
                          value: `${message.author.tag}`,
                          inline: true
                        },
                        {
                          name: "Copyrights:",
                          value: `**\`${args[2]}\`**`,
                          inline: true
                        },
                        {
                          name: "Description:",
                          value: `**\`${des}\`**`,
                          inline: true
                        } 
                      ) 
   .setTimestamp() 
   let button = new disbut. MessageButton()
  .setStyle('url')
  .setURL("https://hastebin.com/" + link)
  .setLabel('Download Code'); 
 
    bdfd.send({
      button:button, 
      embed:embed
    })

   bdfd.send({files:[line]})
    message.channel.send(new Discord.MessageEmbed()
 .setAuthor("✅ Done", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Your Code Has Been Sended`)
  )
})
    })
   
    .catch(() => {
      message.channel.send('**Error : Try Again**');
    });
}) 
} 
//Html
if (args[1] === "html"){
  const embed =  new Discord.MessageEmbed()
 .setColor("#F80000")
 .setDescription(`Now Typing Your Code`)
message.channel.send(embed)
      .then(() => {
        
  var filter = m => m.author.id == message.author.id;
  message.channel.awaitMessages(filter ,{
    max: 1,
    time: 30000,
    errors: ['time'],
  }) 
      .then((collected) =>{
        const Hastebin = require("hastebin-save");
Hastebin.upload(collected.first().content, link => {
    const html = client.channels.cache.get(sett.html)
    const line = sett.line
    const embed = new Discord.MessageEmbed()
   .setAuthor("Html Codes")
   .setColor("#F80000")
   .setDescription("```html\n" +collected.first().content + "\n```")
    .addFields(
                        {
                          name: "Shard By:",
                          value: `${message.author.tag}`,
                          inline: true
                        },
                        {
                          name: "Copyrights:",
                          value: `**\`${args[2]}\`**`,
                          inline: true
                        },
                        {
                          name: "Description:",
                          value: `**\`${des}\`**`,
                          inline: true
                        } 
                      ) 
   .setTimestamp() 
   let button = new disbut. MessageButton()
  .setStyle('url')
  .setURL("https://hastebin.com/" + link)
  .setLabel('Download Code'); 
 
    html.send({
      button:button, 
      embed:embed
    })

    html.send({files:[line]})
    message.channel.send(new Discord.MessageEmbed()
 .setAuthor("✅ Done", message.guild.iconURL())
 .setColor("#F80000")
 .setDescription(`Your Code Has Been Sended`)
  )
})
    })
   
    .catch(() => {
      message.channel.send('**Error : Try Again**');
    });
}) 
} 
}
})


client.login(process.env.token)
