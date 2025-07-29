const countdownElement = document.getElementById("countdown");

const missionDate = new Date("2025-10-08T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = missionDate - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "🎉 A missão começa hoje!";
    return;
  }

  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  countdownElement.innerHTML = `⏳ Faltam ${months} meses, ${days} dias e ${hours} horas para a missão.`;
}

updateCountdown();
setInterval(updateCountdown, 3600000); // atualiza a cada hora

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
