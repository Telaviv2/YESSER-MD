// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEUzQ2NRVEF0b3dTTkZoK2k3dm96UDdGWVQ4cEd6ZVV3eXh6ajV2NGgyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2JLRXc1MjJ3TzVRYjlIcC9FdEcwZ3p0ZmhtY3NHcXNCZFVySFJ6SkNFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTnZvVVJMUVFScWQ4MXVpVWViRmNJeVVDRk1nRi9mUVlray93cjYwcEhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqd1R5c1puc3dLa0s5SjRBMlZNbU9IMVpjZmVtV1lpaUpyL080cVBKUUNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPQW5yaXpiUm5JdDBESFh2Y3psK2JJaWtpc2JMbnE0MEwzSTdTRFIyVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBPd2owVm1oekpMOTRUNURsb1IyeGIzQVpyMzdLbzVJTzZwaGxidWNEbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0plMTRmRVFTYVNLUGFtamF3Z1hsSm45RW9zdi9FQXZwa2ZkdU42NkZWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1IrY3lZUEV2bkVuQWJEZG9tSzAyY0VWVlRteERTcnh0VkxDN3UxeVAxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdLdkZ6SXVoQUNGeTdiWlYwZEdRRFZFcDBqZTlmQzRCUW5yaWxVRTMybVp6R3hmaWg2WlFSSGFMVXFjaVhCRXpUMS9odUpucEZ1YTYwampSSDNkaERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Ik9yenJvcWI5OEJrd0tjamE3M3o4bHk3YTdvQjlJa0VuYmRUOGNSclUrbm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkltcUF5MURpUzJHYjJDYjdOZm5mbVEiLCJwaG9uZUlkIjoiZmVkNTIyYWYtM2QzNi00MjJjLWEyNDktZTFkNGI4Mzg1Yjc5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY1a0MzTGN1aWZNb2cvYk5qcmZYOEsvc0RtND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhY1RsQ1c5RkYxZmZNak9ScW84SEg4aEdNYTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjdUQzRBSzkiLCJtZSI6eyJpZCI6IjIzNzY5NDY2NjY4MTo2MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCL8J2QovCdkKUg8J2QgPCdkKLwnZCd8J2QsvCShpzigqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtK3YrQUVFUFhtamJ3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9sb0NZd2NYTmVlV1EwUUthZExNVXVpUzBPRzFrajlqekcvRHpSNU5qRjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNES28xV2VxUSt6dEtrWm1WZHdkWTVYWUpPUENYd3I2Zi9ZSGR6bGI4U1A4eUZqbE81U2w0NWdJdkpiMnM5OVcrcVMxcEVTU0F4QXZaN254YWRjT0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwcEFrQkVPUjNHREd2STNpUXpDVFNMeFYrMkp0WEw5c2I1YnVDbG1QQSt5SG0wUmJzR3N2SnNSV1pybUxVdWlhZ3lVLyt3WG1Nc0YxaURzdzFtT0dBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5NDY2NjY4MTo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUcGFBbU1IRnpYbmxrTkVDbW5TekZMb2t0RGh0WkkvWTh4dnc4MGVUWXhlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NjY4MDM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZkUCJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©yessertech",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "237694666681",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
