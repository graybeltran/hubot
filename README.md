# javascriptbot

javascriptbot is a chat bot built on the hubot framework. It really likes Mexican food. 

### Things javascriptbot does

1) javascriptbot will respond to certain food related messages. If a user says "I like Mexican food", javascriptbot will reply in agreement, saying "I like Mexican food". For all other things that a user says he or she likes, javascriptbot will reply, "I don't like [that]".

2) If javascriptbot hears any mention of certain kinds of Mexican food, it will respond that it likes Mexican food. 

3) If a user asks javascriptbot what its favorite food is, it will respond with a specific kind of Mexican food, chosen at random (Don't make javascriptbot choose!).

4) If a user asks javascriptbot to "Make me a taco", javascriptbot will provide a taco emoji. 

### To install

Download javascript bot here: https://github.com/graybeltran/hubot.git

Run npm install hubot-slack --save

Run [hubot slack token] ./bin/hubot --adapter slack