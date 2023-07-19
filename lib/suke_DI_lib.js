const { Client, GatewayIntentBits, Partials } = require('discord.js');
async function login(token) {
    const DIclient = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildEmojisAndStickers,

            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.MessageContent,
        ],
        partials: [
            Partials.Message,
            Partials.Reaction,
        ],
    });
    return new Promise((resolve, reject) => {
        try {
            async function ConectDiscord(token) {
                await DIclient.login(token);
            };
            DIclient.once('ready', () => { console.log(`${DIclient.user.tag} Ready`); resolve(DIclient); });
            ConectDiscord(token)
        } catch (error) {
            reject(error)
        }

    });
}
async function channelsend(ID, text) {
    this.channels.cache.get(ID).send(text);
}
module.exports = {
    login,
    channelsend

};