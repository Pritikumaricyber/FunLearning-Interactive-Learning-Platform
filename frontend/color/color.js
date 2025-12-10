const colors = [
  { name: "Red", body: "#ef5350", band: "#c62828", tip: "#b71c1c" },
  { name: "Blue", body: "#42a5f5", band: "#1976d2", tip: "#0d47a1" },
  { name: "Yellow", body: "#fff176", band: "#fbc02d", tip: "#f57f17" },
  { name: "Orange", body: "#ffb74d", band: "#ef6c00", tip: "#e65100" },
  { name: "Purple", body: "#ba68c8", band: "#8e24aa", tip: "#4a148c" },
  { name: "Sky Blue", body: "#4dd0e1", band: "#00acc1", tip: "#006064" },
  { name: "White", body: "#ffffff", band: "#eeeeee", tip: "#cccccc" },
  { name: "Black", body: "#212121", band: "#424242", tip: "#000000" },
  { name: "Brown", body: "#a1887f", band: "#6d4c41", tip: "#4e342e" },
  { name: "Grey", body: "#e0e0e0", band: "#9e9e9e", tip: "#616161" },
  { name: "Pink", body: "#f48fb1", band: "#d81b60", tip: "#880e4f" },
  { name: "Green", body: "#a5d6a7", band: "#66bb6a", tip: "#388e3c" }
];

let current = 0;
let started = false;

function handleClick() {
  if (!started) {
    document.getElementById("introScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
    started = true;
    showNextCrayon();
  } else {
    showNextCrayon();
  }
}

function showNextCrayon() {
  const container = document.getElementById("crayonContainer");
  const nameTag = document.getElementById("nameTag");

  const currentCrayon = container.querySelector(".crayon");

  if (currentCrayon) {
    currentCrayon.classList.add("fade-out");
    nameTag.classList.add("fade-out");

    setTimeout(() => {
      container.innerHTML = "";
      nameTag.textContent = "";
      nameTag.classList.remove("fade-out");

      if (current >= colors.length) {
        document.body.onclick = showFullParade;
        return;
      }

      renderCrayon(colors[current]);
      current++;
    }, 500);
  } else {
    if (current >= colors.length) {
      showFullParade();
      return;
    }

    renderCrayon(colors[current]);
    current++;
  }
}

function renderCrayon({ name, body, band, tip }) {
  const container = document.getElementById("crayonContainer");
  const nameTag = document.getElementById("nameTag");

  const crayon = document.createElement("div");
  crayon.className = "crayon";
  crayon.innerHTML = `
    <svg viewBox="0 0 100 200">
      <polygon points="50,0 85,40 15,40" fill="${tip}" />
      <rect x="10" y="40" width="80" height="150" fill="${body}" />
      <rect x="7" y="38" width="85" height="10" fill="${band}" />
      <rect x="7" y="160" width="85" height="30" fill="${band}" />
      <ellipse cx="35" cy="80" rx="10" ry="12" fill="#fff" />
      <ellipse cx="65" cy="80" rx="10" ry="12" fill="#fff" />
      <circle cx="35" cy="80" r="5" fill="#000" />
      <circle cx="65" cy="80" r="5" fill="#000" />
      <circle cx="32" cy="77" r="2" fill="#fff" />
      <circle cx="62" cy="77" r="2" fill="#fff" />
      <path d="M35,110 Q50,140 65,110 Q50,130 35,110" fill="#000" />
      <path d="M45,120 Q50,125 55,120 Q50,130 45,120" fill="#fdd835" />
    </svg>
  `;

  container.appendChild(crayon);
  nameTag.textContent = name;
  nameTag.style.opacity = "0";
  nameTag.style.animation = "fadeInText 0.6s ease forwards";
}

function showFullParade() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("fullParade").style.display = "flex";

  const container = document.getElementById("crayonContainerFull");
  container.innerHTML = "";

  colors.forEach(({ name, body, band, tip }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "crayon-wrapper";

    const crayon = document.createElement("div");
    crayon.className = "crayon-full";
    crayon.innerHTML = `
      <svg viewBox="0 0 100 200">
        <polygon points="50,0 85,40 15,40" fill="${tip}" />
        <rect x="10" y="40" width="80" height="150" fill="${body}" />
        <rect x="7" y="38" width="85" height="10" fill="${band}" />
        <rect x="7" y="160" width="85" height="30" fill="${band}" />
        <ellipse cx="35" cy="80" rx="10" ry="12" fill="#fff" />
        <ellipse cx="65" cy="80" rx="10" ry="12" fill="#fff" />
        <circle cx="35" cy="80" r="5" fill="#000" />
        <circle cx="65" cy="80" r="5" fill="#000" />
        <circle cx="32" cy="77" r="2" fill="#fff" />
        <circle cx="62" cy="77" r="2" fill="#fff" />
        <path d="M35,110 Q50,140 65,110 Q50,130 35,110" fill="#000" />
        <path d="M45,120 Q50,125 55,120 Q50,130 45,120" fill="#fdd835" />
      </svg>
    `;

    const nameTag = document.createElement("div");
    nameTag.textContent = name;
    nameTag.className = "name-tag";

    wrapper.appendChild(crayon);
    wrapper.appendChild(nameTag);
    container.appendChild(wrapper);
  });
}
