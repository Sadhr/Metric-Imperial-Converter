/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  const regEx = /[a-z]/i
  
  this.getNum = function(input) {
    
    let result;
    result = input.slice(0, input.indexOf(regEx.exec(input)));
    const regExpValidNumber = /[/](.*)([/])/g;
    try{
      eval(result);
    } catch(e){
      if(e instanceof SyntaxError){
        return result = "invalid number";
      }
    }
    
    if (regExpValidNumber.test(result)) return result = 'invalid number'; 
    
    return result !== "" ? eval(result) : 1;
  };
  
  this.getUnit = function(input) {
    
    let result;
    const regExpValidUnit = /^gal$|^l$|^lbs$|^kg$|^mi$|^km$/i;
    result = input.slice(input.indexOf(regEx.exec(input)));
    return regExpValidUnit.test(result) ? result : "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    
    let result;
    initUnit = initUnit.toLowerCase();
    
    switch(initUnit){
      case "gal":
        return result = "L";
        break;
      case "l":
        return result = "gal";
        break;
      case "lbs":
        return result = "kg";
        break;
      case "kg":
        return result = "lbs";
        break;
      case "mi":
        return result = "km";
        break;
      case "km":
        return result = "mi";
        break;
      default:
        return result = "invalid unit";
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    
    let result;
    unit = unit.toLowerCase();
    
    switch(unit){
      case "gal":
        return result = "gallons";
        break;
      case "l":
        return result = "litres";
        break;
      case "lbs":
        return result = "pounds";
        break;
      case "kg":
        return result = "kilograms";
        break;
      case "mi":
        return result = "miles";
        break;
      case "km":
        return result = "kilometers";
        break;
      default:
        return result = "units";
        break;
    }
  
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    initUnit = initUnit.toLowerCase();
    
    switch(initUnit){
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = initNum;
        break;
    }
  
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const numToReturnUnit = initUnit === "invalid unit" ? returnNum : returnNum.toFixed(5);
    const numToReturnNumber = initNum === "invalid number" ? "invalid number" : numToReturnUnit
    let result = `${initNum} ${initUnit} convert to ${numToReturnNumber} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
