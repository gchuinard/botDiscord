const   Command = require('./command');

module.exports = class  OnGame extends Command
{
    static  match(message)
    {
        return (message.content.startsWith('!game'));
    }

    static  action(message)
    {
        message.channel.send('Ok @here, qui est chaud pour une game ?');
    }
}