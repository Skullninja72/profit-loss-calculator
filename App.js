var buyprice = document.querySelector("#buyprice");
var numberofshares = document.querySelector("#Numberofshares");
var sellprice =document.querySelector("#sellprice");

 var calculatebtn=document.querySelector("#calculatebtn");


var absoluteVal = document.querySelector("#profitorLossAbs");
var percentageVal = document.querySelector("#profitLossPercentage");

calculatebtn.addEventListener("click", calculator);

function calculator() {
  console.log("Clicked");
  var a =  buyprice.value;
  var b = Numberofshares.value;
  var c = sellprice.value;
  console.log(a);

  var profitLossAbsolute = (c - a) * b;

  var profitLossPercentage = ((c - a) / a) * 100;

  if (profitLossAbsolute > 0) {
    absoluteVal.innerText = "Profit : " + profitLossAbsolute;
  } else {
    absoluteVal.innerText = "Loss :" + profitLossAbsolute;
  }

  if (profitLossPercentage > 0) {
    percentageVal.innerText =
      "Profit Percentage : " + profitLossPercentage + "%";
  } else {
    percentageVal.innerText =
      " Loss Percentage : " + profitLossPercentage + "%";
  }
}



