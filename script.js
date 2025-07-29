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
setInterval(updateCountdown, 3600000);

// Rolar até seção
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function copiarTexto(id) {
  const elemento = document.getElementById(id);
  const texto = elemento.textContent.trim();

  navigator.clipboard.writeText(texto).then(() => {
    mostrarNotificacao("✅ Copiado!");
  }).catch(() => {
    mostrarNotificacao("❌ Erro ao copiar!");
  });
}

function mostrarNotificacao(mensagem) {
  const notificacao = document.createElement("div");
  notificacao.textContent = mensagem;
  notificacao.style.position = "fixed";
  notificacao.style.bottom = "30px";
  notificacao.style.right = "30px";
  notificacao.style.backgroundColor = "#1B4332";
  notificacao.style.color = "#fff";
  notificacao.style.padding = "12px 20px";
  notificacao.style.borderRadius = "10px";
  notificacao.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  notificacao.style.zIndex = "1000";
  notificacao.style.fontFamily = "'Poppins', sans-serif";
  notificacao.style.fontSize = "16px";

  document.body.appendChild(notificacao);

  setTimeout(() => {
    notificacao.remove();
  }, 2500);
}

