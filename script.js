
const TOTAL_SCREENS = 4;
let currentScreen = 1;
let envelopeOpened = false;

function goTo(number) {
  if (number < 1 || number > TOTAL_SCREENS) return;

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(`screen${number}`)
    .classList.add("active");

  currentScreen = number;

  document.getElementById("pageIndicator").textContent =
    `0${number} / 0${TOTAL_SCREENS}`;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openEnvelope() {
  if (envelopeOpened) return;

  envelopeOpened = true;

  document.getElementById("envelopeBtn")
    .classList.add("opened");

  document.getElementById("envelopeHint").textContent =
    "Một điều chân thành đang được mở ra...";

  setTimeout(() => {
    document.getElementById("letterText")
      .classList.add("visible");

    document.getElementById("envelopeHint")
      .textContent = "Mình hy vọng cậu sẽ đọc hết nhé ♡";
  }, 650);
}

function revealIdentity() {
  document.getElementById("identity")
    .classList.add("visible");

  document.getElementById("revealBtn").style.display = "none";

  document.getElementById("identity")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function respond(answer) {
  const message = document.getElementById("responseMessage");

  if (answer === "yes") {
    message.textContent =
      "Cảm ơn cậu đã cho mình cơ hội. Chúng ta cứ từ từ tìm hiểu nhau nhé ♡";
  } else {
    message.textContent =
      "Không sao đâu, cậu cứ dành thời gian suy nghĩ nhé. Mình tôn trọng cảm xúc của cậu.";
  }
}

// Bật hoặc tắt nhạc
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Tắt nhạc";
      musicBtn.setAttribute("aria-label", "Tắt nhạc");
    } catch (error) {
      musicLabel.textContent = "Không phát được";
      console.warn("Không thể phát nhạc:", error);
    }
  } else {
    music.pause();
    musicLabel.textContent = "Bật nhạc";
    musicBtn.setAttribute("aria-label", "Bật nhạc");
  }
});
