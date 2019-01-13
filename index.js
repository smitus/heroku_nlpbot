const Discord = require("discord.js");
const robot = new Discord.Client();

robot.login("NTE4NTY4MTU3NzExOTU4MDE3.DxzQ8g.l8u4ZLFuHJZiZuIFOWTXbgihkg4");

robot.on('message', (message) => {
  if (message.content == "qd") {
    message.delete()
    message.channel.send(":zap: :zap: :zap:  стак " + message.author + " стартует поиск игры!!! :zap:(НОРМАЛ РЕЖИМ ВЫБОРА!):zap: Ждите своей очереди!:loudspeaker::loudspeaker::loudspeaker:");
   
  }
  if (message.content == "qb") {
    message.delete()
    message.channel.send(":zap: :zap: :zap:  стак " + message.author + " стартует поиск игры!!! :zap:(НОРМАЛ ВЫБОР В СЛЕПУЮ!):zap: Ждите своей очереди!:loudspeaker::loudspeaker::loudspeaker:");
  
  }
  if (message.content == "qf") {
    message.delete()
    message.channel.send(":zap: :zap: :zap:  стак " + message.author + " стартует поиск игры!!! :zap:(ФЛЕКС!):zap: Ждите своей очереди!:loudspeaker::loudspeaker::loudspeaker:");
 
  }
  if (message.content == "p") {
    message.delete()
    message.channel.send(":checkered_flag::checkered_flag: :checkered_flag: стак " + message.author + " закончил поиск матча! Можно стартовать игру остальным соклубникам.:checkered_flag::checkered_flag::checkered_flag:");
  }
});
