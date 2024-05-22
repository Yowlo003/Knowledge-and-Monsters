document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');
    const dialogs = document.querySelectorAll('.dialog');
    const gif = document.querySelector('.gif');
    const charpic1 = document.querySelectorAll('.charimg1');
    let currentDialogIndex = 0;
    let isAnimating = false;

    btn.addEventListener('click', function() {
        // If currently animating, return and prevent button click
        if (isAnimating) {
            return;
        }

        // Hide the current dialog
        dialogs[currentDialogIndex].classList.add('hidden');
        
        // Move to the next dialog (if available)
        currentDialogIndex++;
        
        // If all dialogs have been shown, reset to the beginning
        if (currentDialogIndex >= dialogs.length) {
            // Redirect to another HTML page
            window.location.href = '../../../Act2/index2.html';
            return; // Exit the function
        }

        // Show the next dialog with reveal animation
        dialogs[currentDialogIndex].classList.remove('hidden');
        dialogs[currentDialogIndex].classList.add('reveal');

        // If it's not the last dialog, set isAnimating to true
        if (currentDialogIndex < dialogs.length - 1) {
            isAnimating = true;
            // Delay enabling button until text animation completes
            setTimeout(function() {
                isAnimating = false;
            }, 1000); // Adjust the delay time as needed
        }

        // After the second dialog, show the GIF
        if (currentDialogIndex === 3) {
            gif.classList.remove('hidden');
            isAnimating = true; // Set animation flag to true
            setTimeout(function() {
                gif.classList.add('hidden');
                isAnimating = false; // Set animation flag to false
            }, 2000); // Hide the GIF after 1000 milliseconds (1 second)
        }
    });
});
