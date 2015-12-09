module.exports = function(robot) {
  var favorite_food;
  robot.respond(/I like (.*)/i, function(res) {
    var food;
    food = res.match[1];
    if (food === "Mexican food" || food === "mexican food") {
      return res.reply("I also like " + food);
    } else {
      return res.reply("I don't like " + food);
    }
  });
  robot.hear(/burrito|quesadilla|chimichanga|torta/i, function(msg) {
    return msg.reply("I like Mexican food");
  });
  robot.hear(/Make me a taco/i, function(res) {
    return res.emote(":taco:");
  });
  favorite_food = ['tacos al pastor', 'chorizo burrito', 'carne enchilada tostada', 'tacos dorados', 'pozole', 'tortilla soup'];
  robot.respond(/(.*) favorite food/i, function(res) {
    return res.send(res.random(favorite_food));
  });
};