function inputFieldValue(id) {
  
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
  
}

function TextFieldValue(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  const donateTitle = parseFloat(document.getElementById(id).innerText);
  console.log(donateTitle);

  return textValue;
}

function reduceAmount(id) {
  const amountReduceBtn = parseFloat(document.getElementById(id).innerText);
  return amountReduceBtn;
}


function formatCurrency(amout) {
  return `${amout}`;
}


const modal = document.getElementById('my_modal_1')
function showModal() {
  
}