//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNBUHJ1M3RDZkFrSTY1eituQ1BhS0wyY2ozSWg2dUprdTlJbU1uRUxHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2c2NEd6azVRemlVQTNybkthUzlSeWNYYUFuRTNWSWZ1dEZLSExZYW5WTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTVNxdUhaUUhDOVNvd2t3ZGlvN2ZVaDdZMjBJc2tHTVdlR3VrNFdHZEdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodmRibUFmMGpKSCtuK3UrdHo2S2tsYTczSi85bFNKUjhXRVVqYTRqbmt3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJMFgrcjlicmxTL1JPazRWRXJ0d3RyTTZkbDVQQUxGYk01NyttQnpLbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIwaWlzTGQvM2gwUGhIM2JBY2hvbTZlZGp0NzJpaUt3ekhGOFFGcmRaUmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0czYllvTmpyRHJSYkdoNS8rNVJhbzdYYUxKQ3dUOUxvNmtDNmkvL1Vucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGo3WHhIbTJYeDBRSWlTdUNRUXR6YjlzR1VwSFkzejExeDA2cWFCakJtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOdndsdGRKQnRmVmFLWmEyU29ZTHVDM2J2YmEvaitSNG5NVm5wMmQzdHowREhNd3h0ODRuL1FkZGk0QlFGa3U0RHdQS0J6SDBrNExmc05oN2FrK2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJ0NlVvbUNiU0plTGhGcE0yNFRLc3FNcGZxWVhjQ3MrTkh5c3g1Tjd0ZE9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLZ09pcFZfQlE3MjVSUE1FQk1xZ25BIiwicGhvbmVJZCI6ImZhNmE1OWU1LWIwZDYtNDEyYy1iYTBiLTllNjNkNTU1OTg4NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QVlDdHZHZ0RlQVYyMzIvc2VRUGtQQWw1RjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3hIek5RM3dVRTB2OXVrRjRhV0dMMXdKRlE4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZETVpWOUNHIiwibWUiOnsiaWQiOiIyNTQ3Njk3MjQzNjE6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhoLvqqq7hppPqqrvqq4DhpYVf4aeB4aWF77qD6qqR6quA4aaTXzE5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMREZ2TGNCRU9pOXZiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1WHl1V3lES3lma3E0NHVmTnU0Snlwd21aTEg3ZUZSZ2dRYzc5dWZZUmp3PSIsImFjY291bnRTaWduYXR1cmUiOiJWTGs1eHZ2UEp3Mko5U0ppOEVOUlJ5MFo3czU1V1VpcjFGK1JvU3pvQlNyYzRVMnZSeTIvbVdyQnIyc0JRR2JobU8vUXB0NVZYK0RoMC9jUkFQcTRDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRDRoU1RBeURCQ1RFS2pmQU5hZUVWb0tBeEpNaEpydC9rSUNuMmp5ZFhBOTR6Tkh6eERzbGx1SnFSdWllbGRBczZTRDJ4SFQreUk0N3pZbDVJdm13aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3Njk3MjQzNjE6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJibDhybHNneXNuNUt1T0xuemJ1Q2NxY0ptU3grM2hVWUlFSE8vYm4yRVk4In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzY5MTQxfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FOSTER_BOT-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Foster Grimes",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
