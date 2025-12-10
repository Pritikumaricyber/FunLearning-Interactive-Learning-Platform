const playground = document.getElementById('playground');
const counter = document.getElementById('counter');
const label = document.getElementById('label');

let count = 0;

const labels = {
  1: "A balloon of joy!",
  2: "Two little chicks",
  3: "A trio of berries",
  4: "Puzzle pieces unite!",
  5: "High five!",
  6: "Ladybug legs",
  7: "Colors of the rainbow",
  8: "Octopus hugs",
  9: "Teddy’s treasures",
  10: "Party time!"
};

const poeticBase = [
  "the curious twin", "the dozen dream", "the spiral stretch",
  "the playful leap", "the glowing gate", "the moon’s whisper",
  "the dancing flame", "the sky’s echo", "the gentle roar",
  "the circle’s echo"
];

const emojis = ["🎈", "🐥", "🍓", "🧩", "🖐", "🐞", "🌈", "🐙", "🧸", "🎊"];

function numberToWords(n) {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  const ten = Math.floor(n / 10);
  const one = n % 10;
  return tens[ten] + (one ? "-" + ones[one] : "");
}

playground.addEventListener('click', (e) => {
  count++;

  // Heading shows digit
  counter.textContent = count;

  // Label shows spelled number + poetic line
  const word = numberToWords(count);
  const poetic = count <= 10 ? labels[count] : poeticBase[(count - 11) % poeticBase.length];
  label.textContent = `${word}: ✨ ${poetic}`;

  // Add animated shape
  const shape = document.createElement('div');
  shape.className = 'shape';
  shape.style.left = `${e.offsetX - 20}px`;
  shape.style.top = `${e.offsetY - 20}px`;
  playground.appendChild(shape);

  // Add floating emoji
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = emojis[(count - 1) % emojis.length];
  emoji.style.left = `${e.offsetX}px`;
  emoji.style.top = `${e.offsetY}px`;
  playground.appendChild(emoji);

  setTimeout(() => {
    shape.remove();
    emoji.remove();
  }, 1500);
});
