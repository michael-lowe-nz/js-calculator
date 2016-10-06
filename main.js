var toDisplay = "";
var currentNum = "";
var nextNum = "";
var currentOperation = "";
var displayLimit = 6;


$(document).ready(function(){
  display("Hi there");
  setButtonListeners();
});

function display(val){
  console.log("Displaying...");
  $(".calc-display").html(val);
}

function calculate(){

}

function buttonClick(){
  console.log("button clicked")
  console.log("it was this button: "+this.id);
  return this.id;
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
          //add switch statements
          addition();
        }
        else {
          if (currentNum.length < displayLimit){
            currentNum =  currentNum + current;
            console.log("currentNum:"+currentNum);
            display(currentNum);
          }
        }
      });
    }()); //immediate invocation to make the function available outside of loop scope
  }
  // document.getElementById('1').addEventListener("click",function(){console.log("1 button pushed");});
}

function addition(){
  console.log("Addition function exec.");
}
