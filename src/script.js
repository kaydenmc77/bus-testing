// Test for pull request

function validateForm(username, destination, seats, pricePerSeat) {
  // Validation
  if (username && destination && seats > 0) {
    // Calculate fare
    const totalFare = seats * pricePerSeat;
    return totalFare;
  } else {
    return "Error";
  }
}

if (typeof module !== "undefined") {
  module.exports = { validateForm };
}
