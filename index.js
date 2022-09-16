var initialPrice = document.querySelector(".initial-price");
var quantityStocks = document.querySelector(".quantity-stocks");
var currentPrice = document.querySelector(".current-price");
var button = document.querySelector(".btn");
var output = document.querySelector(".output");

button.addEventListener("click", handleClick);

function handleClick() {
  var ip = Number(initialPrice.value);
  var qty = Number(quantityStocks.value);
  var cp = Number(currentPrice.value);
  if(ip == "" || qty == "" || cp == ""){
    alert("please fill all fields")
  }else if(ip<=0||qty<=0||cp<=0){
    alert("input should be greater than zero")
  }
  
  else{
  calculateProfitAndLoss(ip, qty, cp);
}
}
function calculateProfitAndLoss(initial, quantity, current) {
  if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    output.innerText =
      "Hey, the profit is " +
      profit +
      " and the percent is " +
      profitPercentage.toFixed(2);
    output.style.color = "green";
  } else if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    output.innerText =
      "Hey, the loss is " +
      loss +
      " and the percent is " +
      lossPercentage.toFixed(2);
    output.style.color = "red";
  } else {
    output.innerText = "No pain no gain and no gain no pain";
    output.style.color = "blue";
  }
}
