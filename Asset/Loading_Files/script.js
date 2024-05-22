let progressCompleted = false;

const startProgress = () => {
    const progressBar = document.getElementById("myProgressBar");
    let width = 0;

    if (!progressCompleted) {
        document.body.removeEventListener("mousemove", startProgress);
        clickText.textContent = "Starting...";
        const frame = () => {
            if (width <= 100) {
                progressBar.style.width = `${width}%`;
                progressBar.innerHTML = `${width}%`;
                width++;
            } else {
                clearInterval(interval);
                setTimeout(function() {

                    window.location.href = "Asset/Act1/Cutscenes/index.html";
        
                  }, 1000);
            }
        };
        const interval = setInterval(frame, 50);
    } else {
        
    }
};

document.body.addEventListener('mousemove', startProgress);
