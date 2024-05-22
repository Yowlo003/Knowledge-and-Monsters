document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');
    const dialogs = document.querySelectorAll('.dialog');
    const gif = document.querySelector('.gif');
    const characterNames = document.querySelectorAll('.charactername');
    const characterNames1 = document.querySelectorAll('.charactername1');
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
            window.location.href = '../../Map/map1/index.html';
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
    });
});
