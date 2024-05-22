// Function to show the message box
function showMessage() {
    document.getElementById('message-box').style.display = 'block';
}

// Function to hide the message box
function hideMessage() {
    document.getElementById('message-box').style.display = 'none';
}

// Event listener for the lvl-10m link
document.querySelector('.lvl-8m').addEventListener('click', function(event) {
    // Prevent the default action of the link (opening the level)
    event.preventDefault();
    
    // Show the message box
    showMessage();
});
// Event listener for the lvl-10m link
document.querySelector('.lvl-9m').addEventListener('click', function(event) {
    // Prevent the default action of the link (opening the level)
    event.preventDefault();
    
    // Show the message box
    showMessage();
});
// Event listener for the lvl-10m link
document.querySelector('.lvl-10m').addEventListener('click', function(event) {
    // Prevent the default action of the link (opening the level)
    event.preventDefault();
    
    // Show the message box
    showMessage();
});

// Event listener for the close button
document.getElementById('close-btn').addEventListener('click', function(event) {
    // Hide the message box when the close button is clicked
    hideMessage();
});