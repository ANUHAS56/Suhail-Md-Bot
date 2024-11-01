const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_53_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImluT09CNldiYWJBZUtFVEJ3WkpLcloyMTR3OHBVdmhzemt4ZFlyWnZZcUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDM2ODY0MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZCQkZFRjZCQzM2NTMwMjBFOTBBQzYzMDhCM0RENjU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDQ1MTIyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzAzNjg2NDI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MzExQ0U1ODAxOEREMDBBNjY2ODVCRDY3Mjc5QzY3N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA0NTEyMjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaEMxbGEwR3BTRmFoNFVXcHpLbF9Ed1wiLFxuICBcInBob25lSWRcIjogXCI0ZWYzMDNkMi00OTQzLTQ2NDAtOWI4MC0zMTY3YjhlYjk4MjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTYxLFxuICAgICAgMjIzLFxuICAgICAgOTgsXG4gICAgICA4OCxcbiAgICAgIDYwLFxuICAgICAgMTY2LFxuICAgICAgMTgyLFxuICAgICAgMzQsXG4gICAgICAyMTYsXG4gICAgICA0LFxuICAgICAgMjQsXG4gICAgICAxMjEsXG4gICAgICAyMyxcbiAgICAgIDMxLFxuICAgICAgMjA3LFxuICAgICAgMjMwLFxuICAgICAgMTIsXG4gICAgICA1MSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMTYyLFxuICAgICAgMjIyLFxuICAgICAgMTc5LFxuICAgICAgMjEwLFxuICAgICAgNjEsXG4gICAgICAxNTYsXG4gICAgICAyNDEsXG4gICAgICAxNDAsXG4gICAgICAxNjYsXG4gICAgICAzLFxuICAgICAgMTkzLFxuICAgICAgMTczLFxuICAgICAgMjM0LFxuICAgICAgNzksXG4gICAgICAxMTgsXG4gICAgICAyOSxcbiAgICAgIDc2LFxuICAgICAgMTcwLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZBVEtXR1E2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzY4NjQyOTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW92aWVzIEFuZCBUdiBTZXJpZXNcIixcbiAgICBcImxpZFwiOiBcIjE0NjkxNDE4ODIxNDQ1Njo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05IZnNwVUJFSlN1a3JrR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjBlK3UwbVdLN2NucUJaelo0bFNiSDB2MFlyMEtWVXhseU1XQmZ0TlZFaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXWUZ2QTRPK0ZLWEFieXNpZVQ5MHlOSCt6TS8zMU1ETE02eTVrNnNtbTY2R1RKWUU4T0FST20rYTVObENNeTRmMFAxelFxWStDMUYyR0duazdRS1JCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6aXQyVXpvdjZYUStSUEtsblJtQjRvOC8xYktqVmJXcStXRDQxLy84MXB3ZGNuc3ZaRW9nQ2Y3YWtncHNmSXBrUEtTT09LYU1uaUVORTBaanJFcitpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMzY4NjQyOTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDUxMjIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjYyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNjIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFcllvYzRTaVJHR3RzUGxNNzBiMnhwcFZKampXcHZSVG9LYms5QjVENXNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxMzMwNzA4OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNDQ5NzU2ODIyXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
