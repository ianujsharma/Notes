// Select the finance and programming divs
const financeDiv = document.getElementById("finance");
const programmingDiv = document.getElementById("programming");

// Add click event listeners to each div
financeDiv.addEventListener("click", function() {
  window.location.href = "finance.html"; // Redirect to finance page
});

programmingDiv.addEventListener("click", function() {
  window.location.href = "programming.html"; // Redirect to programming page
});
