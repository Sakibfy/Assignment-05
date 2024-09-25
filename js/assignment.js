// blog botton
document.getElementById('Blog_btn')
.addEventListener('click', function () {
  window.location.href = 'blog.html';
});

/* donate card conainer  2 */
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
      "bg-white  h-36 rounded-md lg:p-8 p-4  mx-auto mt-8 w-11/12 border border-gary-500 rounded-md shadow-black shadow-md";

    historyItem.innerHTML = `
           
    <h2 class="lg:text-3xl text-2xl text-gray-900 font-bold">${formatCurrency(valueInput)} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
    <p class="text-xs text-gray-900 mt-3 inline-block">Date: ${new Date()}</p>`;
    const historyContainer = document.getElementById("history_area");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    // modal card
    document.getElementById('modal_box').classList.remove("hidden");
    
  });

/* donate card conainer  2 */
  
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
      "bg-white  h-36 rounded-md lg:p-8 p-4 mx-auto mt-8 w-11/12 border border-gary-500 rounded-md shadow-black shadow-md";

    historyItem.innerHTML = `     
    <h2 class="lg:text-3xl  text-2xl text-gray-900 font-bold">${formatCurrency(valueInput)} Taka is Donate for Flood Relief in Feni,Bangladesh</h2>
    <p class="text-xs text-gray-900 mt-3 inline-block">Date: ${new Date()}</p> `;
    const historyContainer = document.getElementById("history_area");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  });

/* donate card conainer  3 */

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
      "bg-white  h-36 rounded-md lg:p-8 p-4 mx-auto mt-8 w-11/12 border border-gary-500 rounded-md shadow-black shadow-md";
    historyItem.innerHTML = `        
    <h2 class="lg:text-3xl text-2xl text-gray-900 font-bold">${formatCurrency(valueInput)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
    <p class="text-xs text-gray-900 mt-3 inline-block">Date: ${new Date()}</p>`;
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

  document.getElementById("history_area").classList.remove("hidden");
});

donationBtn.addEventListener('click', function () {
  historyBtn.classList.remove("bnt_primary");
  donationBtn.classList.add("bnt_primary");
  
  historyBtn.classList.add('border', 'border-gray-400')
  donationBtn.classList.remove('border', 'border-gray-400')

  
  document.getElementById('main_contant').classList.remove('hidden');
  document.getElementById("history_area").classList.add("hidden");
});

// live condition check
document.getElementById("donate_input_first")
  .addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("donate_input_first").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("donate_error_first").classList.remove("hidden");
    return;
  }
  });
  
// live condition check 2
document.getElementById("donate_input_sec")
  .addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("donate_input_sec").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("donate_error_sec").classList.remove("hidden");
    return;
  }
  });
// live condition check 3
document.getElementById("donate_input_three")
  .addEventListener("input", function () {
  const inputValue = parseFloat(document.getElementById("donate_input_three").value);

  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById("donate_error_three").classList.remove("hidden");
    return;
  }
  });
// modal 
document.getElementById('modal_close_btn').addEventListener('click', function () {
    document.getElementById('modal_box').classList.add("hidden")
})



