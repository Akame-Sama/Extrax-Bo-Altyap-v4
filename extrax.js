const aoi = require('aoi.js')
const bot = new aoi.Bot({
   token: process.env.token, ////token enve
   prefix:"?"
})

////HANDLER//////

bot.onJoined()
bot.onLeave()
bot.onMessage()
bot.loadCommands('./commands')

/////STATUS////

bot.status({
  text: "Rick Code",
  type: "PLAYING",
  STATUS: "dnd",
  time: 12
}) 

/////VARİABLES/////

bot.variables({
 extrax:""
})


/////KOMUTLAR/////


bot.command({
  name:"ping",
  code:`
Mesaj Pingi : $pingms | Bot Pingi : $botPing | Db Pingi : $dbPing
`
})
