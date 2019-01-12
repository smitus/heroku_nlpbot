const Discord = require("discord.js");
const robot = new Discord.Client();

robot.login("NTE4NTY4MTU3NzExOTU4MDE3.Dw_nvg.fO8V1Zv9Hpngow-DhZz4F-safCc");

robot.on('message', (message) => {
  if (message.content == "qd") {
    message.delete()
    message.reply("стартует поиск игры!!! (НОРМАЛ РЕЖИМ ВЫБОРА!) Ждите своей очереди!:loudspeaker::loudspeaker::loudspeaker:");
   
  }
  if (message.content == "qb") {
    message.delete()
    message.reply("стартует поиск игры!!! (НОРМАЛ ВЫБОР В СЛЕПУЮ!) Ждите своей очереди!:loudspeaker::loudspeaker::loudspeaker:");
  
  }
  if (message.content == "qf") {
    message.delete()
    message.reply("стартует поиск игры!!! (ФЛЕКС!) Ждите своей очереди!:loudspeaker::loudspeaker::loudspeaker:");
 
  }
  if (message.content == "p") {
    message.delete()
    message.reply("закончил поиск матча! Можно стартовать игру остальным соклубникам.:checkered_flag::checkered_flag::checkered_flag:");
  }
});
