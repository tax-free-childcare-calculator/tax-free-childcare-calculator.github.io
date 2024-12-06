// script.js
document.getElementById('total-payable').addEventListener('input', function () {
  const totalPayable = parseFloat(this.value);

  if (!isNaN(totalPayable)) {
    // Set the predefined values based on logic
    const amountToPay = totalPayable * 0.8; // 80% of the total payable
    const governmentAddition = totalPayable * 0.2; // 20% of the total payable

    // Populate the remaining fields
    document.getElementById('government-contribution').value = '0.00'; // Always starts as zero
    document.getElementById('amount-to-pay').value = amountToPay.toFixed(2);
    document.getElementById('government-addition').value = governmentAddition.toFixed(2);
  } else {
    // Clear the fields if the input is invalid
    document.getElementById('government-contribution').value = '';
    document.getElementById('amount-to-pay').value = '';
    document.getElementById('government-addition').value = '';
  }
});
