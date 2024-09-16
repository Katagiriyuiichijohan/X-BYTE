const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUczeEMzRENtZ2U0ZXA0RkE3L1owR0JnVUlnb3haSmU5TTlSTXA5amRHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0R0T3JINzdBYzlVNlQraUZnQVRvcTI0RnI4RWtGYkVickdVb2k4VXJ5bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQXJWY2RoeGFLS3VRckNleWZsSGZPVlhnUG96WkpBRU5EakVmTXgxWkdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqcmRodzgxakNDNWl4TzY5cVRya1d3Ti8wWWttelArYmlUZWk5bjVLUDBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHVy9VWWZ3bUE1eThTZkUwZlJQbjIzVkNOQVpkTW9mN0NVQnBpM1ZOVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdtVjl0K3VLK0ROMGV6U0o4RUwzME4zSlE1Z3hhMHFHMHpCV09TOGU2aEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05DNjZyOTZXbkZYSUloVHMyeU9GYnM2WjZkTlZBV09RMHRaZUpwK1FsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTlBS1VGY1RuMTZWd3lTaGYwdHl3TllQWUM0bmxHb1EvSmIwT2dIWG9XUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZDTWdHQ21BeThiUWdMd0tTc1ZpY0FOZGh2TU16VmdocEZvVXBWM1hQaVpjOWZvSFRrT25kb3J3aHpMWktIcEQwR0hhVHQyNGhSNGNSbE9DMTk2M0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJnYmVTaXJDZCtmNloxMnhKZ0pucVQ4WHIrTkxTMmMrbUEvSjN6eisxd1lFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyODkzNjU4OTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI2QkYxMEIyMUNGNUUzRjcxM0RDRURFQjY4MTVEN0QyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY1MDI4MDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlN2cXR2eXdBU1QyTGZtMXZ2MF9WOGciLCJwaG9uZUlkIjoiYjUyYjdkOTgtYjI3NC00ODYwLWExNjMtMzdlOGM3YTE0ZjFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBvSC9iZHJSZTZDa2t4RHgrTk94M1BvVXVpVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3SUFFSjBRNlFaM1Y3MmpzSjRaaVJVNTN2aVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUZEVEhMTkYiLCJtZSI6eyJpZCI6IjIyODkzNjU4OTUxOjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IndvbmRlciB3aXNlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS2d3TThCRVB5dW9iY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsODhrZitNOFcraGl5RDhOdndRYlJwRjZlTCtJak04Z0hFUGxkL2dwZ3hNPSIsImFjY291bnRTaWduYXR1cmUiOiIvaG5EcStzRzlpcG9kMEtiMzlZUHdtYUoyNDhzZnlmQkpjSG5SaGhERm94aW9IZDV3M291Z3E5T1JhS21CbnZOdUFhbVFMZXVxRzBrZjc5ejF4OWREQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidHp4KzZMRXo4dDVHVGp0dmp5UUdSSGpTVHprbkE1TkZwWFNXYnFuR0tXRDlLbk1hb3BGU2d5VXlJbTNIUGJ1bGcvMDd5Ukt1bHFkeU1JTStpUzVMQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5MzY1ODk1MToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZlBKSC9qUEZ2b1lzZy9EYjhFRzBhUmVuaS9pSXpQSUJ4RDVYZjRLWU1UIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NTAyNzkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBSNyJ9' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '22893658951' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'true' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? 'POWERED BY HAMZA': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || true  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LANG: process.env.LANG || 'ENG' , //URDU OR ENG
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO  

};
