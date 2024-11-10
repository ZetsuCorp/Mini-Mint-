// Randomize button placement (simplified example)
const winButtons = [1, 5]; // randomized placement
const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
  const overlay = square.querySelector('.overlay');
  const result = square.querySelector('.result');
  const clickHandler = () => {
    overlay.style.display = 'none';
    square.style.animation = 'none'; // Stop iridescent animation

    if (winButtons.includes(index + 1)) {
      const button = document.createElement('script');
      button.defer = true;
      button.src = 'https://launchpad.heymint.xyz/embed.js';
      button.dataset.projectId = '33939';
      button.dataset.chain = 'BSC';
      button.dataset.tokenId = '1';
      square.appendChild(button);

      const winnerText = document.createElement('div');
      winnerText.className = 'winner-text';
      winnerText.textContent = 'WINNER!';
      winnerText.style.color = '#33cc33'; // green color
      winnerText.style.fontSize = '24px';
      winnerText.style.fontWeight = 'bold';
      winnerText.style.marginTop = '10px';
      square.appendChild(winnerText);
      square.removeEventListener('click', clickHandler); // Remove event listener
    } else {
      result.textContent = 'TRY AGAIN!';
      result.className = 'result try-again';
      result.style.display = 'block';

      // Restart game after clicking Try Again
      result.addEventListener('click', () => {
        // Reset all square styles and content
        squares.forEach((square) => {
          const overlay = square.querySelector('.overlay');
          const result = square.querySelector('.result');
          const winnerText = square.querySelector('.winner-text');
          const button = square.querySelector('script');
          overlay.style.display = 'block';
          square.style.animation = ''; // Restart iridescent animation
          result.style.display = 'none';
          result.textContent = '';
          result.className = 'result';
          if (winnerText) square.removeChild(winnerText);
          if (button) square.removeChild(button);
          square.addEventListener('click', clickHandler); // Re-add event listener
        });
      });
    }
  };
  square.addEventListener('click', clickHandler);
});
