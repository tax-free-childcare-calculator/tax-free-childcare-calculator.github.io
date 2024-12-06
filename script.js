function calculate() {
  // Get user input
  const totalAmount = parseFloat(document.getElementById("totalAmount").value);

  // Validate input
  if (isNaN(totalAmount) || totalAmount <= 0) {
    alert("Please enter a valid total amount.");
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
