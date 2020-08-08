const   Command = require('./command');

module.exports = class  Ping extends Command
{
    static  match(message)
    {
        return (message.content.startsWith('!ping') || message.content.startsWith('!pong'));
    }

    static  action(message)
    {
        if (message.content === '!ping')
            message.reply('pong');
        else
            message.reply('ping');
    }
}