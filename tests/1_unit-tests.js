/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.6L';
      assert.equal(convertHandler.getNum(input), 32.6);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '1/2L';
      assert.equal(convertHandler.getNum(input), 0.5)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '1/10.0L';
      assert.equal(convertHandler.getNum(input), 0.1);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '1/10/2L';
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = "ssL"
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele,i) {
        assert.equal(convertHandler.getUnit(ele), input[i]);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele,i) {
        assert.equal(convertHandler.getUnit(ele), input[i]);
      });
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
    test('For Each Valid Unit Inputs', function(done) {
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
     
      assert.approximately(Number(convertHandler.convert(input[0],input[1])),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      var input = [18.9271, 'l'];
      var expected = 5;
     
      assert.approximately(Number(convertHandler.convert(input[0],input[1])),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.0467;
      
      assert.approximately(Number(convertHandler.convert(input[0],input[1])),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [8.0467, 'km'];
      var expected = 5;
      
      assert.approximately(Number(convertHandler.convert(input[0],input[1])),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      
      var input = [5, 'Lbs'];
      var expected = 2.2679;
      
      assert.approximately(Number(convertHandler.convert(input[0],input[1])),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      
      var input = [2.2679, 'kg'];
      var expected = 5;
      
      assert.approximately(Number(convertHandler.convert(input[0],input[1])),expected,0.1); //0.1 tolerance
      done();
 
    });
    
  });

});