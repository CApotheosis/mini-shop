document.querySelectorAll(".buy-button").forEach((button) => {
  button.onclick = function () {
    alert("Thank you for your purchase!");
    // Implement purchase logic or redirect to payment page
  };
});
