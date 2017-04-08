//console.log("YOU GOT IT TO WORK JENN!!"); //smoke test
var chalk = require('chalk');
var colors = require('colors');
console.log(chalk.blue("Testing the blue color"));
console.log('OMG Rainbows!'.rainbow);

function getSum(a, b){
  return a + b;
}

function subtract(a,b){
 //OPTION 1 - use Math to subtract b from a OR
// return Math.abs(a-b);
 //OPTION 2 - ternary condition (always three parts 1-condition 2-if 3-then)
 return a > b ? a - b : b - a; //is a greater than b? if so, minus b from a, otherwise minus a from b.
 //OPTION 3 - regular if/else statement
// if(a > b){
//   return a-b
// }else {
//   return b-a
// }

}

describe('test basic math functions', function(){
  //here is where we put all our tests
  it('sum returns correct total', function(){
    expect( getSum(3,6) ).toEqual(9);//call this function and pass in 3 and 6 because we expect it to return 9
  });

  it('subtract function is correct', function () {
    expect(subtract(10,4)).toEqual(7); //green dot is passing, red F is failing
  });

  it('try the subtract again', function(){
    expect(subtract(3,11) ).toEqual(8);
  });

}); //end describe
