var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  if(ip == '' || qty == '' || curr == ''){
    alert("Please fill out all Fields");
  } else {
    calculateProfitAndLoss(ip, qty, curr);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputBox.style.color = "red";
    outputBox.style.fontSize ="large";
    showOutput(
      `You are having a loss of ${loss} and the percent is ${lossPercentage.toFixed(2)}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputBox.style.color = "green";
    outputBox.style.fontSize ="large";
    showOutput(
      `You are having a profit of ${profit} and the percent is ${profitPercentage.toFixed(2)}%`
    );
  } else {
    outputBox.style.color = "orange";
    showOutput("No pain,no gain and no gain,no pain");
  }
}
function showOutput(message) {
  outputBox.innerHTML = message;
}
