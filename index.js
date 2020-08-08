const   Discord = require('discord.js');

const   Google = require('./commands/google');
const   Ping = require('./commands/ping');
const   OnGame = require('./commands/onGame');
const   List = require('./commands/list');

const   bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setAvatar('./avatar.png')
        .then(() => console.log('Avatar bien mis en place.'))
        .catch(console.error);
    bot.user.setActivity('Never gonna give you up', { type: 'LISTENING' })
        .then(() => console.log('Activité bien mis en place'))
        .catch(console.error);
})

bot.on('guildMemberAdd', (member) => {
    member.createDM()
    .then ((channel) => { 
        channel.send(`Bienvenu sur le channel, sac à merde, enfin ${member.displayName}...\nTu peux lister mes commandes en tapant !list.c`)
    })
    .catch(console.error);
})

bot.on('message', (message) => {
    Google.parse(message);
    Ping.parse(message);
    OnGame.parse(message);
    List.parse(message);
})



bot.login('NzI2OTAzNzc1ODk3MzIxNDcy.XvkHPA.t5EV7IUvNH5HLIIpTavVxHbPqnc');