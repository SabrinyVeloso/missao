// Mostrar seção ao clicar no menu
function mostrarConteudo(id) {
    const secoes = document.querySelectorAll('.secao-conteudo');
    secoes.forEach(secao => secao.classList.remove('mostrar'));
  
    const ativa = document.getElementById(id);
    if (ativa) ativa.classList.add('mostrar');
  
    // Fecha menu em telas pequenas após clique
    const menu = document.getElementById('menuLateral');
    if (window.innerWidth <= 768) {
      menu.classList.remove('ativo');
    }
  }
  
  // Menu toggle mobile
  document.getElementById('menuToggle').addEventListener('click', () => {
    const menu = document.getElementById('menuLateral');
    menu.classList.toggle('ativo');
  });
  
  // Exibe o primeiro conteúdo automaticamente ao carregar
  window.addEventListener('load', () => {
    mostrarConteudo('para-onde');
  });
  