document.getElementById('donate_btn_first')
  .addEventListener('click', function () {
    
    const valueInput = inputFieldValue('donate_input_first');


    const donateTotalAmount = TextFieldValue('donate_total_amount');
    
    const newAmount = donateTotalAmount + valueInput;
    
    document.getElementById('donate_total_amount').innerText = newAmount;

    // Reduce Btn
    const totalAmountreduceBtn = reduceAmount('Reduce_Btn');
    
    const newReduceAmount = totalAmountreduceBtn - valueInput;
    document.getElementById('Reduce_Btn').innerText = newReduceAmount;


    // history Create div 1

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white w-10/12 h-36 rounded-md p-8";

    historyItem.innerHTML = `
           
    <h2 class="text-2xl text-gray-900 font-bold">${formatCurrency(valueInput)} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
    <p class="text-xs text-gray-900 mt-3 inline-block">Date: ${new Date()}</p>
          
      `;
    const historyContainer = document.getElementById("history_area");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    
  });


// donate btn 2
  
document.getElementById('donate_btn_sec')
  .addEventListener('click', function () {
    
    const valueInput = inputFieldValue('donate_input_sec');


    const donateTotalAmount = TextFieldValue('donate_total_amount_sec');
    
    const newAmount = donateTotalAmount + valueInput;
    
    document.getElementById('donate_total_amount_sec').innerText = newAmount;

    // Reduce Btn
    const totalAmountreduceBtn = reduceAmount('Reduce_Btn');
    
    const newReduceAmount = totalAmountreduceBtn - valueInput;
    document.getElementById('Reduce_Btn').innerText = newReduceAmount;


     // history Create div 2

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white w-10/12 h-36 rounded-md p-8";

    historyItem.innerHTML = `
           
    <h2 class="text-2xl text-gray-900 font-bold">${formatCurrency(valueInput)} Taka is Donate for Flood Relief in Feni,Bangladesh</h2>
    <p class="text-xs text-gray-900 mt-3 inline-block">Date: ${new Date()}</p>
          
      `;
    const historyContainer = document.getElementById("history_area");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

// donate btn 3
  
document.getElementById('donate_btn_three')
  .addEventListener('click', function () {
    
    const valueInput = inputFieldValue('donate_input_three');


    const donateTotalAmount = TextFieldValue('donate_total_amount_three');
    
    const newAmount = donateTotalAmount + valueInput;
    
    document.getElementById('donate_total_amount_three').innerText = newAmount;

    // Reduce Btn
    const totalAmountreduceBtn = reduceAmount('Reduce_Btn');
    
    const newReduceAmount = totalAmountreduceBtn - valueInput;
    document.getElementById('Reduce_Btn').innerText = newReduceAmount;


 // history Create div 3

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white w-10/12 h-36 rounded-md p-8";

    historyItem.innerHTML = `
           
    <h2 class="text-2xl text-gray-900 font-bold">${formatCurrency(valueInput)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
    <p class="text-xs text-gray-900 mt-3 inline-block">Date: ${new Date()}</p>
          
      `;
    const historyContainer = document.getElementById("history_area");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

// Donation and History
  
const donationBtn = document.getElementById('Donation')
const historyBtn = document.getElementById('History')
historyBtn.addEventListener('click', function () {
  
historyBtn.classList.add("bnt_primary");
donationBtn.classList.remove("bnt_primary");
  
historyBtn.classList.remove('border', 'border-gray-400')
donationBtn.classList.add('border', 'border-gray-400')

  
document.getElementById('main_contant').classList.add('hidden')

})

donationBtn.addEventListener('click', function () {
  historyBtn.classList.remove("bnt_primary");
  donationBtn.classList.add("bnt_primary");
  
  historyBtn.classList.add('border', 'border-gray-400')
  donationBtn.classList.remove('border', 'border-gray-400')

  
  document.getElementById('main_contant').classList.remove('hidden')

});
