//console.log("YOU GOT IT TO WORK JENN!!"); //smoke test
var chalk = require('chalk');
var colors = require('colors');
//console.log(chalk.blue("Running tests beep boop"));
console.log('OMG Rainbows!'.rainbow);

function getSum(a, b){
  return a + b;
}

function subtract(a,b){
 return a > b ? a - b : b - a;
}

describe('test basic math functions', function(){

  it('sum returns correct total', function(){
    expect( getSum(3,6) ).toEqual(9);//call this function and pass in 3 and 6 because we expect it to return 9
  });

it('subtract function is correct', function () {
  expect(subtract(10,4)).toEqual(6); //green dot is passing, red F is failing
});


});
