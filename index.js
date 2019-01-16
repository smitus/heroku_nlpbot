  const Discord = require("discord.js");
  const robot = new Discord.Client();

  robot.login("NTE4NTY4MTU3NzExOTU4MDE3.DxzQ8g.l8u4ZLFuHJZiZuIFOWTXbgihkg4");

  robot.on('message', (message) => {
    if (message.content == "qd") {
      message.delete()
      message.channel.send(":zap:Стак " + message.author + " стартует поиск (НОРМАЛ РЕЖИМ ВЫБОРА)!!! :zap: в: "+new Date().toLocaleTimeString('en-US', { hour12: false }));
    }
    if (message.content == "qb") {
      message.delete()
      message.channel.send(":zap:Стак " + message.author + " стартует поиск (НОРМАЛ ВЫБОР В СЛЕПУЮ) !!!:zap: в: "+new Date().toLocaleTimeString('en-US', { hour12: false }));
    
    }
    if (message.content == "qf") {
      message.delete()
      message.channel.send(":zap:Стак " + message.author + " стартует поиск игры (ФЛЕКС) !!!:zap: в: "+new Date().toLocaleTimeString('en-US', { hour12: false }));
    }
    if (message.content == "qa") {
      message.delete()
      message.channel.send(":zap:Стак " + message.author + " стартует поиск игры (АРАМ) !!!:zap: в: "+new Date().toLocaleTimeString('en-US', { hour12: false }));
  
    }
    if (message.content == "p") {
      message.delete()
      message.channel.send(":checkered_flag:Стак " + message.author + " закончил поиск матча!:checkered_flag: в: "+  new Date().toLocaleTimeString('en-US', { hour12: false }));
    }
  });
