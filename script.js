function calculate() {
  // Get user input
  const totalAmount = parseFloat(document.getElementById("totalAmount").value);

  // Validate input
  if (isNaN(totalAmount) || totalAmount <= 0) {
    document.getElementById("govContribution").value = "";
    document.getElementById("amountToPay").value = "";
    document.getElementById("govAddedAmount").value = "";
    return;
  }

  // Perform calculations
  const govContribution = 0; // Predefined
  const govAddedAmount = totalAmount * 0.2; // 20% of total amount
  const amountToPay = totalAmount - govAddedAmount; // Remaining 80%

  // Display results
  document.getElementById("govContribution").value = govContribution.toFixed(2);
  document.getElementById("amountToPay").value = amountToPay.toFixed(2);
  document.getElementById("govAddedAmount").value = govAddedAmount.toFixed(2);
}

// Add an event listener to trigger calculation on input
document.getElementById("totalAmount").addEventListener("input", calculate);
