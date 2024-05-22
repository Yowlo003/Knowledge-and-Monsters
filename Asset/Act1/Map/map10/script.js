// Function to show the message box
function showMessage() {
    document.getElementById('message-box').style.display = 'block';
}

// Function to hide the message box
function hideMessage() {
    document.getElementById('message-box').style.display = 'none';
}
// Event listener for the close button
document.getElementById('close-btn').addEventListener('click', function(event) {
    // Hide the message box when the close button is clicked
    hideMessage();
});