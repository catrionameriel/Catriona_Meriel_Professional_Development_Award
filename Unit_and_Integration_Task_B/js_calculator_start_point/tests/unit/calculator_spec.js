var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // multiply 3x5 and get 15
  it('calculator can multiply', function() {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 15)
  })

  // divide 21/7 and get 3
  it('calculator can divide', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  // add 1+4 and get 5
  it('calculator can add', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  // subtract 7-4 and get 3
  it('calculator can subtract', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  // concatenate multiple number button clicks
  it('calculator can click mutiple buttons', function() {
    calculator.numberClick(5);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 54);
  })

  // chain multiple operations together
  it('can do multiple operations', function() {
    calculator.previousTotal = 3;
    calculator.add(6);
    calculator.operatorClick('+');
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 5);
    assert.equal(calculator.previousOperator, '+');
  })

  it('can clear running total without affecting calculation', function() {
    calculator.previousTotal = 2;
    calculator.add(4);
    calculator.clearClick();
    calculator.add(5);
    assert.equal(calculator.runningTotal, 7);
  })

});
