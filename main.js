var toDisplay = 0;


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

function buttonPress(button){
  console.log()
}


function setButtonListeners(){
  // var buttonVals = ['0','1','2','3','4','5','6','7','8','9','add','subtract','multiply','divide','decimal','clear'];
  document.getElementById('1').addEventListener("click",function(){

  });
  document.getElementById('2').addEventListener("click",function(){console.log("2 button pushed");});
  document.getElementById('3').addEventListener("click",function(){console.log("3 button pushed");});
  document.getElementById('4').addEventListener("click",function(){console.log("4 button pushed");});
  document.getElementById('5').addEventListener("click",function(){console.log("5 button pushed");});
  document.getElementById('6').addEventListener("click",function(){console.log("6 button pushed");});
  document.getElementById('7').addEventListener("click",function(){console.log("7 button pushed");});
  document.getElementById('8').addEventListener("click",function(){console.log("8 button pushed");});
  document.getElementById('9').addEventListener("click",function(){console.log("9 button pushed");});
  document.getElementById('0').addEventListener("click",function(){console.log("0 button pushed");});
  document.getElementById('add').addEventListener("click",function(){console.log("add button pushed");});
  document.getElementById('subtract').addEventListener("click",function(){console.log("subtract button pushed");});
  document.getElementById('divide').addEventListener("click",function(){console.log("divide button pushed");});
  document.getElementById('equals').addEventListener("click",function(){console.log("equals button pushed");});
  document.getElementById('decimal').addEventListener("click",function(){console.log("decimal button pushed");});
  document.getElementById('clear').addEventListener("click",function(){console.log("clear button pushed");});

}
