const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const yesButton = document.getElementById("yesButton");
const timeButton = document.getElementById("timeButton");
const responseModal = document.getElementById("responseModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const messageLink = document.getElementById("messageLink");

// Optional: add your WhatsApp link here.
// Example format: "https://wa.me/15551234567?text=I%20read%20your%20story%20%F0%9F%92%97"
const YOUR_MESSAGE_LINK = "#";
messageLink.href = YOUR_MESSAGE_LINK;
if (YOUR_MESSAGE_LINK === "#") {
  messageLink.style.display = "none";
}

function tryPlayMusic() {
  if (!music) return;
  music.volume = 0.46;
  music.play()
    .then(() => {
      musicToggle.classList.remove("muted");
      musicIcon.textContent = "♪";
    })
    .catch(() => {
      musicToggle.classList.add("muted");
      musicIcon.textContent = "↻";
    });
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  tryPlayMusic();
});

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    tryPlayMusic();
  } else {
    music.pause();
    musicToggle.classList.add("muted");
    musicIcon.textContent = "×";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".story-copy p").forEach((paragraph) => observer.observe(paragraph));

function openModal(type) {
  if (type === "yes") {
    modalTitle.textContent = "You just made my world brighter.";
    modalText.textContent = "This one chance means more to me than I can put into words.";
    createHeartConfetti();
  } else {
    modalTitle.textContent = "Take all the time you need.";
    modalText.textContent = "I wanted to be honest with my heart. Your comfort and our friendship matter to me deeply.";
  }

  responseModal.classList.add("open");
  responseModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  responseModal.classList.remove("open");
  responseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

yesButton.addEventListener("click", () => openModal("yes"));
timeButton.addEventListener("click", () => openModal("time"));
modalClose.addEventListener("click", closeModal);
responseModal.addEventListener("click", (event) => {
  if (event.target === responseModal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

function createHeartConfetti() {
  const count = window.innerWidth < 720 ? 28 : 54;

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "confetti-heart";
    heart.textContent = ["♡", "♥", "💗", "✨"][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    heart.style.setProperty("--fall-duration", `${2600 + Math.random() * 2400}ms`);
    heart.style.opacity = `${0.55 + Math.random() * 0.45}`;
    document.body.appendChild(heart);

    window.setTimeout(() => heart.remove(), 5400);
  }
}
