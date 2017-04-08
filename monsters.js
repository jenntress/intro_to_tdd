//console.log("YOU GOT IT TO WORK JENN!!"); //smoke test

var Monster = function(name, color){//monstor constructor
  this.name = name;
  this.color = color;
};

Monster.prototype.sayHello = function (){
  return "My name is " + this.name + " and I am " + this.color
}

//module -> move all related functions into a file
module.exports = Monster;
