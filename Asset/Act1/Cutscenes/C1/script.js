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

        // Special handling for changing character names
        if (currentDialogIndex === 9) {
            characterNames.forEach(function(name) {
                name.classList.add('hidden');
            });
            characterNames1.forEach(function(name) {
                name.classList.remove('hidden');
            });
            charpic1.forEach(function(name) {
                name.classList.remove('hidden');
            });
        } else if (currentDialogIndex === 18) {
            characterNames1.forEach(function(name) {
                name.classList.add('hidden');
            });
            characterNames.forEach(function(name) {
                name.classList.remove('hidden');
            });
        } else if (currentDialogIndex === 19) {
            characterNames1.forEach(function(name) {
                name.classList.remove('hidden');
            });
            characterNames.forEach(function(name) {
                name.classList.add('hidden');
            });
        } else if (currentDialogIndex === 24) {
            characterNames.forEach(function(name) {
                name.classList.remove('hidden');
            });
            characterNames1.forEach(function(name) {
                name.classList.add('hidden');
            });
        }
    });
});
