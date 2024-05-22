document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const characterLifeBar = document.getElementById('character1-life');
    const enemyLifeBar = document.getElementById('enemy1-life');
    const startButton = document.getElementById('start-btn');
    const invent = document.getElementById('potioninv');
    const questionContainer = document.getElementById('question-container');
    const wordGameContainer = document.getElementById('word-game');
    const potion1 = document.getElementById("po1");
    const potion2 = document.getElementById("po2");

    // Set initial health values
    let characterHealth = 100;
    let enemyHealth = 100;
    let potionUses = 5;
    let potionUses1 = 3;

    // Declare playerAnswer globally
    let playerAnswer;
    let isPotion1Animating = false;
    let isPotion2Animating = false;

    // Function to update life bars
    function updateLifeBars() {
        characterLifeBar.style.width = characterHealth + '%';
        enemyLifeBar.style.width = enemyHealth + '%';
    }

    // Play another GIF when the web page opens
    window.onload = function() {
        questionContainer.style.display = 'none';
        questionContainer.style.display = 'none';
        startButton.disabled = true;
        potion1.removeEventListener("click", p2function);
        potion1.src = "Assets/potione.png";
        potion2.removeEventListener("click", p2function);
        potion2.src = "Assets/potione.png";
        // Hide the existing player hit element
        const playerHitElement = document.getElementById('playerhit');
        playerHitElement.style.display = 'none';

        // Create a new GIF element
        const newGifElement = document.createElement('img');
        newGifElement.src = 'Assets/p1-3.gif'; // Replace 'path_to_your_new_gif.gif' with the actual path to your GIF file
        newGifElement.alt = 'New Correct GIF';
        newGifElement.width = '400';
        newGifElement.height = '320';
        newGifElement.classList.add('p1'); // Add any necessary classes
        newGifElement.style.marginTop = '100px';
        newGifElement.style.marginLeft = '25px';
        
        // Append the new GIF element to the parent container
        playerHitElement.parentNode.appendChild(newGifElement);

        // After a timeout, hide the opening GIF and show the player hit div
        setTimeout(function() {
            newGifElement.parentNode.removeChild(newGifElement);
            playerHitElement.style.display = 'block';
            startButton.disabled = false;
            potion1.src = "Assets/potion.png";
            potion2.src = "Assets/potion1.png";
            potion1.addEventListener("click", p1function);
            potion2.addEventListener("click", p2function);
        }, 500); // Adjust the timeout duration as needed (in milliseconds)
    };

    document.getElementById("potion-count").textContent = (potionUses);
    document.getElementById("potion-count1").textContent = (potionUses1);

    function p1function() {
        // Check if potion animation is ongoing
        if (isPotion1Animating) {
            return; // Ignore click if animation is ongoing
        }

        // Check if either character or enemy has lost
        if (characterHealth >= 100) {
            // Character lost
            alert("Cant use potion your HP is full");
        }
        else{
            if (potionUses > 0) {
                isPotion1Animating = true;

                const heal = 10;
                characterHealth += heal;
                if (characterHealth > 100) {
                    characterHealth = 100; // Ensure health doesn't exceed 100
                }
                // Update the life bars after increasing character's health
                updateLifeBars();
        
                // Decrease the remaining potion uses
                potionUses--;
    
                // Update the potion count display
                document.getElementById("potion-count").textContent = (potionUses);
    
                const highGifContainer = document.getElementById('healid1');
                    highGifContainer.innerHTML = '<img src="Assets/heal1.gif" alt="Correct High GIF" width="500">';
    
                    // Remove the high GIF after a delay
                    setTimeout(() => {
                        highGifContainer.innerHTML = ''; // Remove the high GIF from the container
                        isPotion1Animating = false;
                    }, 1000); // Adjust the duration (in milliseconds) as needed
    
                // If no more potion uses left, disable the potion click event and change the potion image
                if (potionUses === 0) {
                    potion1.removeEventListener("click", p1function);
                    potion1.src = "Assets/potione.png";
                    document.getElementsByTagName("p")
                    document.getElementById("potion-count").textContent = "0";
                }
            } else {
                // Alert if the potion uses are exhausted
                alert("You are out of potions!");
    
                updateLifeBars();
            }
        }
        
    }

    function p2function() {
        // Check if potion animation is ongoing
        if (isPotion2Animating) {
            return; // Ignore click if animation is ongoing
        }

        // Check if either character or enemy has lost
        if (characterHealth >= 100) {
            // Character lost
            alert("Cant use potion your HP is full");
        }
        else{
            if (potionUses1 > 0) {
                isPotion2Animating = true;

                const heal = 30;
                characterHealth += heal;
                if (characterHealth > 100) {
                    characterHealth = 100; // Ensure health doesn't exceed 100
                }
                // Update the life bars after increasing character's health
                updateLifeBars();
        
                // Decrease the remaining potion uses
                potionUses1--;
    
                // Update the potion count display
                document.getElementById("potion-count1").textContent = (potionUses1);
    
                const highGifContainer = document.getElementById('healid2');
                    highGifContainer.innerHTML = '<img src="Assets/heal2.gif" alt="Correct High GIF" width="500">';
    
                    // Remove the high GIF after a delay
                    setTimeout(() => {
                        highGifContainer.innerHTML = ''; // Remove the high GIF from the container
                        isPotion2Animating = false;
                    }, 1000); // Adjust the duration (in milliseconds) as needed
    
                // If no more potion uses left, disable the potion click event and change the potion image
                if (potionUses1 === 0) {
                    potion2.removeEventListener("click", p2function);
                    potion2.src = "Assets/potione.png";
                    document.getElementById("potion-count1").textContent = "0";
                }
            } else {
                // Alert if the potion uses are exhausted
                alert("You are out of potions!");
    
                updateLifeBars();
            }
        }
        
    }

    function blinkEnemy() {
        const enemyElement = document.getElementById('enemyhit');
        let blinkCount = 0;
        const blinkInterval = setInterval(function() {
            enemyElement.style.filter = "hue-rotate(90deg) brightness(2)"; // Apply red filter
            setTimeout(function() {
                enemyElement.style.filter = "none"; // Remove filter
            }, 300); // 500 milliseconds for each blink
            blinkCount++;
            if (blinkCount >= 1) { // Three blinks (on-off cycles) = 6 iterations
                clearInterval(blinkInterval); // Stop the blinking animation
            }
        }, 500); // Blink every 1 second (500ms on + 500ms off)
    }

    function blinkplayer() {
        const enemyElement = document.getElementById('playerhit');
        let blinkCount = 0;
        const blinkInterval = setInterval(function() {
            enemyElement.style.filter = "hue-rotate(90deg) brightness(2)"; // Apply red filter
            setTimeout(function() {
                enemyElement.style.filter = "none"; // Remove filter
            }, 300); // 500 milliseconds for each blink
            blinkCount++;
            if (blinkCount >= 1) { // Three blinks (on-off cycles) = 6 iterations
                clearInterval(blinkInterval); // Stop the blinking animation
            }
        }, 400); // Blink every 1 second (500ms on + 500ms off)
    }

    // Function to handle player's answer
    function handleAnswer(isCorrect, damageAmount = null) {
        wordGameContainer.style.marginTop = '1000px';
        setTimeout(function() {
            wordGameContainer.style.display = 'none';
        }, 500)

        const questionContainer = document.getElementById('question-container');
        questionContainer.style.marginTop = '-13%';
        setTimeout(function() {
            questionContainer.innerHTML = '';
            currentWord = '';
            questionContainer.style.display = 'none';
        }, 500)

        if (isCorrect) {
            // Show GIF for correct answer
            
            // Hide the existing player hit element
            const playerHitElement = document.getElementById('playerhit');
            playerHitElement.style.display = 'none';

            // Create a new GIF element
            const newGifElement = document.createElement('img');
            newGifElement.src = 'Assets/p1-1.gif'; // Replace 'path_to_your_new_gif.gif' with the actual path to your GIF file
            newGifElement.alt = 'New Correct GIF';
            newGifElement.width = '385';
            newGifElement.buttom = '50';
            newGifElement.style.transform = "translateX(80px)";
            newGifElement.classList.add('p1'); // Add any necessary classes
            
            // Append the new GIF element to the parent container
            playerHitElement.parentNode.appendChild(newGifElement);

            // Remove the new GIF element after a delay
            setTimeout(() => {
                
                newGifElement.parentNode.removeChild(newGifElement);
                // Show the original player hit element

                if (damageAmount !== null) {
                    // Randomly choose between two containers
                    const containerIndex = Math.random() < 0.5 ? 1 : 2; // Assuming you have two containers: high-gif-container and high1-gif-container
    
                    // Get the selected container based on the index
                    const containerId = containerIndex === 1 ? "high-gif-container" : "high1-gif-container";
                    const container = document.getElementById(containerId);
    
                    // Set the source and width of the selected GIF
                    let gifSource, gifWidth;
                    if (containerId === "high-gif-container") {
                        gifSource = "Assets/correct_high.gif";
                        gifWidth = "900";
                    } else {
                        gifSource = "Assets/correct_high1.gif";
                        gifWidth = "400";
                    }
    
                    const imgElement = document.createElement('img');
                    imgElement.src = gifSource;
                    imgElement.alt = "Correct High GIF";
                    imgElement.width = gifWidth;
    
                    // Append the img element to the highGifContainer
                    container.innerHTML = '';
                    container.appendChild(imgElement);
    
                    // Set timeout duration based on the selected GIF
                    const timeoutDuration = containerId === "high-gif-container" ? 1000 : 1000; // Adjust timeout duration as per your requirement
    
                    // Remove the high GIF after a delay
                    setTimeout(() => {
                        container.innerHTML = ''; // Remove the high GIF from the container
                        startButton.disabled = false;
                        blinkEnemy(); // Start blinking animation
                        // Update life bars
                        updateLifeBars();
                        
                        invent.classList.remove('hide');
                        setTimeout(function() {
                            invent.style.transform = 'translateY(0px)';
                        }, 500)
                    }, timeoutDuration); // Adjust the duration (in milliseconds) as needed
                    
                } else {
                    // Randomly choose between two containers
                    const containerIndex = Math.random() < 0.5 ? 1 : 2; // Assuming you have two containers: high-gif-container and high1-gif-container
    
                    // Get the selected container based on the index
                    const containerId = containerIndex === 1 ? "low-gif-container" : "low1-gif-container";
                    const container = document.getElementById(containerId);
    
                    // Set the source and width of the selected GIF
                    let gifSource, gifWidth;
                    if (containerId === "low-gif-container") {
                        gifSource = "Assets/correct_low.gif";
                        gifWidth = "500";
                    } else {
                        gifSource = "Assets/correct_low1.gif";
                        gifWidth = "500";
                    }
    
                    const imgElement = document.createElement('img');
                    imgElement.src = gifSource;
                    imgElement.alt = "Correct High GIF";
                    imgElement.width = gifWidth;
    
                    // Append the img element to the highGifContainer
                    container.innerHTML = '';
                    container.appendChild(imgElement);
    
                    // Set timeout duration based on the selected GIF
                    const timeoutDuration = containerId === "low-gif-container" ? 3000 : 2000; // Adjust timeout duration as per your requirement
    
                    // Remove the high GIF after a delay
                    setTimeout(() => {
                        container.innerHTML = ''; // Remove the high GIF from the container
                        startButton.disabled = false;
                        blinkEnemy(); // Start blinking animation
                        // Update life bars
                        updateLifeBars();

                        invent.classList.remove('hide');
                        setTimeout(function() {
                            invent.style.transform = 'translateY(0px)';
                        }, 500)
                    }, timeoutDuration); // Adjust the duration (in milliseconds) as needed
                    
                }
                
                playerHitElement.style.display = 'block';
            }, 2400); // Adjust the duration (in milliseconds) as needed

            

            // Decrease enemy's health
            if (damageAmount !== null) {
                enemyHealth -= damageAmount;
            } else {
                // Decrease enemy's health randomly
                const damage = Math.floor(Math.random() * 28) + 1; // Random damage between 1 and 20
                enemyHealth -= damage;
            }
            if (enemyHealth < 0) {
                enemyHealth = 0; // Ensure health doesn't go negative
            }
        } else {
            // Decrease character's health only if the player provided an answer
            if (playerAnswer !== null) {
                let damage;
                const damageType = Math.random() < 0.5 ? 'low' : 'high'; // Randomly choose damage type
                
                if (damageType === 'low') {
                    damage = 26; // High damage
                    blinkplayer()

                    const highGifContainer = document.getElementById('plow-gif-container');
                    highGifContainer.innerHTML = '<img src="Assets/phit1.gif" alt="Correct High GIF" width="1000">';

                    // Remove the high GIF after a delay
                    setTimeout(() => {
                        highGifContainer.innerHTML = ''; // Remove the high GIF from the container
                        startButton.disabled = false;
                        // Update life bars
                        updateLifeBars();

                        invent.classList.remove('hide');
                        setTimeout(function() {
                            invent.style.transform = 'translateY(0px)';
                        }, 500)
                    }, 3800); // Adjust the duration (in milliseconds) as needed
                } else {
                    damage = 31; // High damage
                    blinkplayer()

                    const highGifContainer = document.getElementById('phigh-gif-container');
                    highGifContainer.innerHTML = '<img src="Assets/phit2.gif" alt="Correct High GIF" width="1000">';

                    // Remove the high GIF after a delay
                    setTimeout(() => {
                        highGifContainer.innerHTML = ''; // Remove the high GIF from the container
                        startButton.disabled = false;
                        // Update life bars
                        updateLifeBars();

                        invent.classList.remove('hide');
                        setTimeout(function() {
                            invent.style.transform = 'translateY(0px)';
                        }, 500)
                    }, 2100); // Adjust the duration (in milliseconds) as needed
                }
                
                characterHealth -= damage;
                if (characterHealth < 0) {
                    characterHealth = 0; // Ensure health doesn't go negative
                }
            }
        }
        
        // Check if either character or enemy has lost
        if (characterHealth <= 0) {
            // Character lost
            setTimeout(() => {
                showMenuScreen(false); // Show menu screen for defeat
            }, 1200); // Adjust the duration (in milliseconds) as needed
            
        } else if (enemyHealth <= 0) {
            setTimeout(() =>{
                // Hide the existing player hit element
                const playerHitElement = document.getElementById('playerhit');
                playerHitElement.style.display = 'none';

                // Create a new GIF element
                const newGifElement = document.createElement('img');
                newGifElement.src = 'Assets/p1-2.gif'; // Replace 'path_to_your_new_gif.gif' with the actual path to your GIF file
                newGifElement.alt = 'New Correct GIF';
                newGifElement.width = '400';
                newGifElement.height = '320';
                newGifElement.classList.add('p1'); // Add any necessary classes
                newGifElement.style.marginTop = '100px';
                newGifElement.style.marginLeft = '25px';
                
                // Append the new GIF element to the parent container
                playerHitElement.parentNode.appendChild(newGifElement);

                // Remove the new GIF element after a delay
                setTimeout(() => {
                    newGifElement.parentNode.removeChild(newGifElement);
                    // Show the original player hit element
                    
                    playerHitElement.style.display = 'block';

                    // Enemy lost
                    document.getElementById("next-level-btn").disabled = false;
                    document.getElementById('next-level-btn').classList.remove('gray');
                    document.getElementById("quit-btn").disabled = false;
                    document.getElementById('quit-btn').classList.remove('gray');
                    showMenuScreen(true); // Show menu screen for victory
                }, 1000); // Adjust the duration (in milliseconds) as needed
            }, 4000);

        } else {
            // Continue the game
            // You can add more logic here, like asking another question
        }

        // Function to show the menu screen
        function showMenuScreen(isVictory) {
            const menuScreen = document.getElementById('menu-screen');
            menuScreen.style.display = 'block';

            const menuTitle = menuScreen.querySelector('h2');
            menuTitle.textContent = isVictory ? "Congratulations! You Won." : "Game Over! You Lost.";

            // Add event listeners for the buttons
            document.getElementById('restart-btn').addEventListener('click', restartGame);
            document.getElementById('next-level-btn').addEventListener('click', proceedToNextLevel);
            document.getElementById('quit-btn').addEventListener('click', quitGame);
        }

        // Event listener functions for menu buttons
        function restartGame() {
            // Implement restart logic here
            location.reload();
        }

        function proceedToNextLevel() {
            // Implement logic to proceed to the next level
            window.location.href = "../lvl10/index.html";
        }

        function quitGame() {
            // Implement quit logic here
            window.location.href = "../../map9/index.html";
        }

    }


    // Function to start the game when the button is clicked
    function startGame() {
        // Disable the start button
        if (characterHealth <= 0) {
            return; // Don't start the game if the character is defeated
        }

        if (enemyHealth <= 0) {
            return; // Don't start the game if the character is defeated
        }

        invent.style.transform = 'translateY(200px)';
        setTimeout(function() {
            invent.classList.add('hide');
        }, 500)

        startButton.disabled = true;

        // Show the word game container
        wordGameContainer.style.display = 'block';
        setTimeout(function() {
            wordGameContainer.style.marginTop = '-25%';
            wordGameContainer.style.transition = "0.5s";
        }, 100)

        questionContainer.style.display = 'block';
        setTimeout(function() {
            questionContainer.style.transform = 'translateX(-50%)';
            questionContainer.style.marginTop = '13%';
            questionContainer.style.transition = "0.5s";
        }, 100)

        // Clear previous question
        questionContainer.innerHTML = '';
        
        // Example usage of handleAnswer function
        // Replace this with your actual game logic, such as asking questions using prompts
        
        const questionType = Math.random() < 0.5 ? 'low' : 'high'; // Randomly choose question type
    
        if (questionType === 'low') {
            // Randomly choose one of the low-damage questions
            const questionIndex = Math.floor(Math.random() * 5); // Random number between 0 and 2

            let questionText;
            let correctAnswer;
            switch (questionIndex) {
                case 0:
                    questionText = "In which year did World War II end?";
                    correctAnswer = "1945";
                    break;
                case 1:
                    questionText = "In which year did the Philippines gain independence from the United States?";
                    correctAnswer = "1946";
                    break;
                case 2:
                    questionText = "What was the name of the famous battle where Filipino and American forces defended against Japanese forces in 1942?";
                    correctAnswer = "battle of bataan";
                    break;
                case 3:
                    questionText = "Which creature from Greek mythology has the head of a bull and the body of a man?";
                    correctAnswer = "minotaur";
                    break;
                case 4:
                    questionText = "Which mythical bird is said to rise from its own ashes after death?";
                    correctAnswer = "phoenix";
                    break;
                default:
                    questionText = "In which year did World War II end?";
                    correctAnswer = "1945";
            }

            const question = document.createElement('p');
            question.textContent = questionText;
            question.classList.add('textq');
            const input = document.createElement('input');
            input.setAttribute("id", "wordinput");
            input.classList.add('inputq', 'inputq1');
            input.addEventListener('input', function(event) {
                // Update the current word in the Bookworm game
                currentWord = event.target.value.toUpperCase(); // Convert to uppercase for consistency
            });
            
            document.body.addEventListener('keydown', function() {
                const instruction = document.getElementById('instruction');
                instruction.style.display = 'block';
            
                // Hide the instruction after a delay (e.g., 2 seconds)
                setTimeout(function() {
                    instruction.style.display = 'none';
                }, 500); // Adjust the delay as needed
            });
            

            const submitButton = document.createElement('button');
            submitButton.textContent = "Submit";
            submitButton.classList.add('btns');

            submitButton.addEventListener('click', function() {
                playerAnswer = input.value;
                if (playerAnswer.toLowerCase() === correctAnswer) {
                    handleAnswer(true,16); // Player answered correctly
                } else {
                    handleAnswer(false); // Player answered incorrectly
                }
            });

            // Append elements to question container
            questionContainer.appendChild(question);
            questionContainer.appendChild(input);
            questionContainer.appendChild(submitButton);
        } else {
            // Randomly choose one of the high-damage questions
            const questionIndex = Math.floor(Math.random() * 5); // Random number between 0 and 2
    
            let questionText;
            let correctAnswer;
            switch (questionIndex) {
                case 0:
                    questionText = "Which ancient civilization built the pyramids?";
                    correctAnswer = "egyptians";
                    break;
                case 1:
                    questionText = "Who was the first President of the Philippines?";
                    correctAnswer = "emilio aguinaldo";
                    break;
                case 2:
                    questionText = "Which Filipino leader declared Martial Law in 1972?";
                    correctAnswer = "ferdinand marcos";
                    break;
                case 3:
                    questionText = "Who was the first female president of the Philippines?";
                    correctAnswer = "corazon aquino";
                    break;
                case 4:
                    questionText = "Which mythical creature is known for being a large, fire-breathing reptile?";
                    correctAnswer = "dragon";
                    break;
                default:
                    questionText = "Which ancient civilization built the pyramids?";
                    correctAnswer = "egyptians";
            }
    
            // Create HTML elements for the question
            const question = document.createElement('p');
            question.classList.add('textq');
            question.textContent = questionText;

            const input = document.createElement('input');
            input.setAttribute("id", "wordinput");
            input.classList.add('inputq', 'inputq1');
            input.addEventListener('input', function(event) {
                // Update the current word in the Bookworm game
                currentWord = event.target.value.toUpperCase(); // Convert to uppercase for consistency
            });
    
            document.body.addEventListener('keydown', function() {
                const instruction = document.getElementById('instruction');
                instruction.style.display = 'block';
            
                // Hide the instruction after a delay (e.g., 2 seconds)
                setTimeout(function() {
                    instruction.style.display = 'none';
                }, 500); // Adjust the delay as needed
            });
            
    
            // Create submit button
            const submitButton = document.createElement('button');
            submitButton.textContent = "Submit";
            submitButton.classList.add('btns');
    
            // Add event listener to submit button
            submitButton.addEventListener('click', function() {
                // Hide the Bookworm game
                document.getElementById('word-game').style.display = 'none';
                
                // Clear previous question
                questionContainer.innerHTML = '';
                currentWord = '';
    
                // Get player's answer
                playerAnswer = input.value;
    
                // Check if the answer is correct
                if (playerAnswer.toLowerCase() === correctAnswer) {
                    handleAnswer(true,21); // Player answered correctly with high damage
                } else {
                    handleAnswer(false); // Player answered incorrectly
                }
            });
    
            // Append elements to question container
            questionContainer.appendChild(question);
            questionContainer.appendChild(input);
            questionContainer.appendChild(submitButton);
        }
    }

    // Add event listener to the backspace button
    const backspaceBtn = document.getElementById('backspace-btn');

    backspaceBtn.addEventListener('click', function() {
        // Remove the last character from currentWord
        currentWord = currentWord.slice(0, -1);

        // Update the input value
        const input = document.getElementById('wordinput');
        input.value = currentWord;

        // Add the active class to inputq1 when the backspace button is clicked
        document.querySelector('.inputq1').classList.add('active1');

        // Remove the active class after a short delay
        setTimeout(function() {
            document.querySelector('.inputq1').classList.remove('active1');
        }, 100); // Adjust the delay as needed
    });

    // Add event listener to the start button
    startButton.addEventListener('click', startGame);
    
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ    1234567890";
const gridSize = {rows: 4, cols: 10};
let grid = [];
let currentWord = '';
let score = 0;


// Function to initialize the game grid
function initGrid() {
    const gridContainer = document.getElementById('grid');
    for (let i = 0; i < gridSize.rows; i++) {
        for (let j = 0; j < gridSize.cols; j++) {
            let index = i * gridSize.cols + j;
            if (index < letters.length) {
                let letter = letters.charAt(index);
                let tile = document.createElement('div');
                tile.classList.add('tile');
                tile.textContent = letter;
                tile.setAttribute('data-letter', letter);
                tile.onclick = function() {
                    addToWord(letter);

                    // Add the active class to inputq1 when the backspace button is clicked
                    document.querySelector('.inputq1').classList.add('active');

                    // Remove the active class after a short delay
                    setTimeout(function() {
                        document.querySelector('.inputq1').classList.remove('active');
                    }, 100); // Adjust the delay as needed
                };
                gridContainer.appendChild(tile);
                grid.push(tile);
            } else {
                // Add empty tiles for space
                let tile = document.createElement('div');
                tile.classList.add('tile');
                gridContainer.appendChild(tile);
                grid.push(tile);
            }
        }
    }
}

// Function to add a letter to the current word
function addToWord(letter) {
    currentWord += letter;
    document.getElementById('wordinput').value = currentWord;
}

// Initialize the game
initGrid();