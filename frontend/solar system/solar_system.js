const planetFacts = {
  Mercury: "☿ Mercury is the closest planet to the Sun and has no atmosphere.",
  Venus: "♀ Venus is the hottest planet due to its thick CO₂ atmosphere.",
  Earth: "🌍 Earth is the only known planet known to support life.",
  Mars: "♂ Mars is the Red Planet and has the tallest volcano in the solar system.",
  Jupiter: "♃ Jupiter is the largest planet and has more than 70 moons.",
  Saturn: "♄ Saturn is famous for its bright, icy rings.",
  Uranus: "♅ Uranus spins on its side and appears bluish due to methane.",
  Neptune: "♆ Neptune is the farthest known planet and has extreme winds."
};

function showFact(planet) {
  document.getElementById("factBox").textContent = planetFacts[planet] || "No fact available.";
}

function createStars(numStars) {
  const container = document.getElementById('star-container');

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Random size
    const size = Math.random() * 2 + 1; // 1px to 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Optional: add drifting animation
    star.style.animation += `, drift ${4 + Math.random() * 4}s ease-in-out infinite alternate`;

    container.appendChild(star);
  }
}

createStars(150); // Add 150 stars
