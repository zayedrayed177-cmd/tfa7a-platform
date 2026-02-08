const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("🤖 بوت Tfa7a Manager شغال");
});

client.login(process.env.DISCORD_BOT_TOKEN);
