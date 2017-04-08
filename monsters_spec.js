//console.log("YOU GOT IT TO WORK JENN!!"); //smoke test
var Monster = require('./monsters'); //give access to the monster contructor js

describe('Lets see how this thing works', function(){
  var lilMonster = new Monster("Mike Wyzowski", "green");
  var bigMonster = new Monster("Sully", "blue");

   it('we have imported our monster function', function(){
     expect(lilMonster).toBeDefined();
   });

   it('the monster has a name', function(){
     expect(lilMonster.name).toEqual("Mike Wyzowski")
   });

   it('the monster has a color', function(){
     expect(lilMonster.color).toEqual("red"); //this one should fail
   });

   it('the monster can tell you some info', function(){
     expect(lilMonster.sayHello()).toEqual("My name is Mike Wyzowski and I am green")
   });

   it('the monster can tell you some info', function(){
     expect(bigMonster.sayHello()).toEqual("My name is Sully and I am blue")
   });

 });//end describe
