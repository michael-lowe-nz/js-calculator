/** Defining global variable **/
var currentNum = "";
var previousNum = "";
var currentOperation = "";
var operating = false;
var displayLimit = 12;

/** Executes when the document is ready **/
$(document).ready(function(){
  display("Hey There!");
  setButtonListeners();
});

function display(val){
  $(".calc-display").html(val);
}

function getDisplay(){
  return currentNum;
}

function clear(){
  currentNum = "";
  previousNum = "";
  currentOperation = "";
  display("0");
}



function setButtonListeners(){ // Think about this approach when refactoring
  var buttonVals = ['0','1','2','3','4','5','6','7','8','9','add','subtract','multiply','divide','decimal','clear','equals'];
  for (var i = 0; i < buttonVals.length; i++){
    (function () {
      var currentButton = buttonVals[i];
      document.getElementById(currentButton).addEventListener("click", function(){
        console.log("ID: "+this.id);
        var current = this.id;
        if (isNaN(current)){ // if its not a number, e.g. multiply, add
          switch (current) {
            case 'add': addition();
            console.log('add from switch');
            break;
            case 'subtract': subtraction();
            console.log('subtract from switch');
            break;
            case 'multiply': multiplication();
            break;
            case 'divide': division();
            break;
            case 'decimal': decimal();
            break;
            case 'clear': clear();
            break;
            case 'equals': calculate();
            break;
            default: return;
          }

        }
        else {
          if (currentNum.length < displayLimit){
            currentNum =  currentNum + current;
            display(currentNum);
          }
        }
      });
    }()); //immediate invocation to make the function available outside of loop scope
  }
  // document.getElementById('1').addEventListener("click",function(){console.log("1 button pushed");});
}

function swapNums(){
  previousNum = currentNum;
  currentNum = "";
}

function calculate(){
  switch (currentOperation){
    case "add":
      currentNum = +previousNum + +currentNum;
      display(currentNum);
      previousNum = currentNum;
      currentNum = "";
      break;
    case "subtract":
      currentNum = previousNum - currentNum;
      display(currentNum);
      previousNum = currentNum;
      currentNum = "";
      break;
    case "divide":
      console.log("switch divide");
      currentNum = previousNum / currentNum;
      display(currentNum);
      previousNum = currentNum;
      currentNum = "";
      break;
    case "multiply":
      currentNum = previousNum * currentNum;
      display(currentNum);
      previousNum = currentNum;
      currentNum = "";
      break;
    default: return;
  }
}

function addition(){
  if (currentOperation === ""){
    swapNums();
    currentOperation = "add";
    display("+");
  }
  else if(currentNum === ""){
    currentOperation = "add";
    display ("+");
  }
  else {
    calculate();
    currentOperation = "add";
  }
}

function subtraction(){
  if (currentOperation === ""){
    swapNums();
    currentOperation = "subtract";
    display("-");
  }
  else if(currentNum === ""){
    currentOperation = "subtract";
    display ("-");
  }
  else {
    calculate();
    currentOperation = "subtract";
  }
}

function multiplication(){
  if (currentOperation === ""){
    swapNums();
    currentOperation = "multiply";
    display("x");
  }
  else if(currentNum === ""){
    currentOperation = "multiply";
    display ("x");
  }
  else {
    calculate();
    currentOperation = "multiply";
  }
}

function division(){
  if (currentOperation === ""){
    swapNums();
    currentOperation = "divide";
    display("&divide");
  }
  else if(currentNum === ""){
    currentOperation = "divide";
    display ("&divide");
  }
  else {
    calculate();
    currentOperation = "divide";
  }
}

function decimal(){
  if (currentNum.length < displayLimit){
    if (!currentNum.includes(".")){
      currentNum = currentNum + ".";
      display(currentNum);
    }
  }
}
