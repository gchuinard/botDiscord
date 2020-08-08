const   Command = require('./command');

module.exports = class  List extends Command
{

    static  match(message)
    {
        return (message.content.startsWith('!list'));
    }

    static  action(message)
    {
//        const listArray = this.listArray;

        const   listArray = this.listArray();
        let     keys = Object.keys(listArray);
        let     listArrayLen = keys.length
        let     str = '\nvoici la liste des commandes (toutes les commandes prennent \"!\" comme préfixe): \n';
        let     i = 0;

        while (i < listArrayLen)
        {
            str += `\n${keys[i]} : ${listArray[keys[i]]}\n`;
            i++;
        }
        console.log(`str = ${str}`);
        message.reply(str);
    }

    static  listArray()
    {
        const   listArray = {
            "ping":"répond pong", 
            "pong" : "répond ping",
            "google" : "permet de faire une recherche google (ex: \"!google comment faire une recherche sur bing ?\")",
            "game" : "ping les membres du channel pour leur proposer de jouer, l'équivalent du batsignal, mais pour les gamers"
        }
    
        return (listArray);
    }
}