/*SECTION - Document version
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
let username = document.getElementById("name").value;
let destination = document.getElementById("destination").value;
let seats = parseInt(document.getElementById("seats").value, 10);


// Constants
const pricePerSeat = 10;

    validateForm(username, destination, seats, pricePerSeat)
});
*/

function validateForm(username, destination, seats, pricePerSeat) {
    // Validation
    if (username && destination && seats > 0) {
        // Calculate fare
        const totalFare = seats * pricePerSeat;

        /*SECTION - HTML Manipulation */
        /*
        // Display confirmation message
        document.getElementById("message").innerText =
        `Booking confirmed for ${username} to ${destination}. Seats: ${seats}. Total fare: $${totalFare}.`;
        */
        /*!SECTION - HTML Manipulation */

        return totalFare
    } else {
        /*SECTION - HTML Manipulation */
        /*
        // Display error message if inputs are invalid
        document.getElementById("message").innerText =
            "Please fill in all fields correctly.";
        */
        /*!SECTION - HTML Manipulation */

        return 'Error'
    }
}

if (typeof module !== 'undefined') {
    module.exports = { validateForm }
}