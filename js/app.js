function inputFieldValue(id) {
  
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
  
}

function TextFieldValue(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  const donateTitle = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

function reduceAmount(id) {
  const amountReduceBtn = parseFloat(document.getElementById(id).innerText);
  return amountReduceBtn;
}

// history
function formatCurrency(amout) {
  return `${amout}`;
}
// home 
function homeBtn() {
  location.replace("index.html")
}



