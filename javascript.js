
let flippedCard = null; // Store the currently flipped card
let matchedCards = 0; // Track the number of matched cards

// Function to start/restart the game
function startRestartGame() {
    // Reset matched cards counter and flipped card
    matchedCards = 0;
    flippedCard = null;
    document.getElementById('message-box').style.display = 'none'; // Hide the congratulations message

    // Shuffle the cards
    shuffleCards();

    // Reset all cards to yellow (unmatched state)
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.remove('matched', 'mismatched'); // Reset cards to default state
        card.style.backgroundColor = 'yellow'; // Ensure the cards are yellow at the start
    });

    // Change button text to Restart after starting the game
    document.getElementById('start').textContent = 'Restart';
}

// Function to shuffle the cards randomly
function shuffleCards() {
    const container = document.querySelector('.cards-container');
    const cardsArray = Array.from(container.children); // Get all card elements
    
    // Shuffle using the Fisher-Yates algorithm
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }

    // Clear the container and append the shuffled cards back to the container
    container.innerHTML = '';
    cardsArray.forEach(card => container.appendChild(card));
}

// Function to handle card click
function handleCardClick(event) {
    const card = event.target;

    if (card.classList.contains('matched') || card === flippedCard) {
        return; // Ignore clicks on already matched cards or the same card twice
    }

    // If no card is flipped, store this card
    if (!flippedCard) {
        flippedCard = card;
    } else {
        // If two cards are flipped, check if they match
        if (flippedCard.getAttribute('data-value') === card.getAttribute('data-value')) {
            card.classList.add('matched'); // Mark both cards as matched
            flippedCard.classList.add('matched');
            card.style.backgroundColor = 'green'; // Set the background color to green
            flippedCard.style.backgroundColor = 'green';
            matchedCards += 2; // Increment matched pair count

            // If all cards are matched, show the congratulations message
            if (matchedCards === 12) {
                document.getElementById('message-box').style.display = 'block';
            }

            flippedCard = null; // Reset flippedCard for next pair
        } else {
            // If cards don't match, turn them red for 2 seconds
            card.classList.add('mismatched');
            flippedCard.classList.add('mismatched');
            card.style.backgroundColor = 'red'; // Set the background color to red
            flippedCard.style.backgroundColor = 'red';

            // After 2 seconds, reset the cards back to yellow
            setTimeout(() => {
                card.classList.remove('mismatched');
                flippedCard.classList.remove('mismatched');
                card.style.backgroundColor = 'yellow'; // Reset to yellow
                flippedCard.style.backgroundColor = 'yellow'; // Reset to yellow
                flippedCard = null; // Reset flipped card
            }, 2000);
        }
    }
}

// Event listener for the "Start" or "Restart" button
document.getElementById('start').addEventListener('click', startRestartGame);

// Event listener for card clicks
document.querySelector('.cards-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('card')) {
        handleCardClick(event);
    }
});


