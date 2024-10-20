document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = document.getElementById('guests').value;

    // Basic validation
    if (!name || !email || !checkIn || !checkOut || !guests) {
        alert('Please fill in all fields.');
        return;
    }

    // Here you could send the data to a server using Fetch API
    document.getElementById('feedback').innerText = 'Your booking has been submitted! We will get back to you soon.';
    document.getElementById('bookingForm').reset(); // Reset the form
});
