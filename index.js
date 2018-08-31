const Commando = require('discord.js-commando');
const bot = new Commando.CommandoClient({
    commandPrefix:"="
});

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', function(message){
    if(message.content == 'chat ded')
    {
        message.channel.sendMessage('Oh hell no, chat aint ded boi');
    }
});

bot.login("NDc0MjUzMzkyMDAxMjM2OTk0.DmlU4g.tD3dlnC9WuXuFws4GM1rXQGr2Gs");

global.servers = {};

bot.on('ready', function(){
    console.log("Ready");
    bot.user.setActivity( "=help", {type: 'LISTENING'})
});